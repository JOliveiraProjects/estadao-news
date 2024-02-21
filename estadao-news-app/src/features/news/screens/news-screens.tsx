import React, { useState, useCallback } from 'react';
import { Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from '../../../hooks/use-translation';
import NewsFormModal from '../components/news-form-modal';
import NewsDetailsModal from '../components/news-detail-modal';

import {
  useAddNewsMutation, 
  useDelNewsMutation, 
  useEditNewsMutation, 
  useGetAllNewsQuery
} from '../services/news-service';
import { NewsCompleteDTO } from '../models/dtos/api-news-dto';

const NewsList: React.FC = () => {
  const { t } = useTranslation();
  const { data, error, isLoading, refetch } = useGetAllNewsQuery();
  const [deleteNews, deleteNewsState] = useDelNewsMutation();
  const [addNews, addNewsState] = useAddNewsMutation();
  const [editNews, editNewsState] = useEditNewsMutation();
  const [modalOpen, setModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsCompleteDTO | null>(null);

  const handleOpenAddModal = () => {
    setSelectedNews(null);
    setModalOpen(true);
  };

  const handleOpenEditModal = (news: NewsCompleteDTO) => {
    setSelectedNews(news);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setDetailsModalOpen(false);
    setSelectedNews(null);
  };

  const handleFormSubmit = async (data: NewsCompleteDTO) => {
    if (selectedNews) {
      await editNews({
        id: selectedNews.id,
        hat: selectedNews.hat,
        url: selectedNews.url,
        title: selectedNews.title,
        image: selectedNews.image,
        thumbnail: selectedNews.thumbnail,
        content: selectedNews.content
      });
    } else {
      await addNews({
        hat: data.hat,
        url: data.url,
        title: data.title,
        image: data.image,
        thumbnail: data.thumbnail,
        content: data.content
      });
    }
    handleCloseModal();
    refetch();
  };

  const handleOpenDetailsModal = (news: NewsCompleteDTO) => {
    setSelectedNews(news);
    setDetailsModalOpen(true);
  };

  const handleDelete = useCallback(async (id: string) => {
    const data = await deleteNews({ id });
  }, []);

  if (isLoading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('error')}</div>;

  return (
    <>
      <Button variant="contained" onClick={handleOpenAddModal}>Add News</Button>
      <List>
        {!isLoading && data?.data?.map((news: NewsCompleteDTO) => (
          <ListItem key={news.id} secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={() => handleOpenEditModal(news)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(news.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton edge="end" aria-label="details" onClick={() => handleOpenDetailsModal(news)}>
                {/* Ícone de detalhes aqui */}
              </IconButton>
            </>
          }>
            <ListItemText 
              primary={news.title} 
              secondary={new Date(news.date_time_publication).toLocaleDateString()} 
            />
          </ListItem>
        ))}
      </List>
      <NewsFormModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
        initialData={selectedNews}
      />
      {selectedNews && (
        <NewsDetailsModal
          open={detailsModalOpen}
          onClose={handleCloseModal}
          news={selectedNews}
        />
      )}
    </>
  );
};

export default NewsList;
