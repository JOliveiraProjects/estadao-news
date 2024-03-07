import React, { useState, useCallback } from 'react';
import { Button, Grid } from '@mui/material';
import { useTranslation } from 'hooks/use-translation';
import NewsFormModal from '../components/news-form-modal';
import NewsDetailsModal from '../components/news-detail-modal';

import {
  useAddNewsMutation, 
  useDelNewsMutation, 
  useEditNewsMutation, 
  useGetAllNewsQuery
} from '../services/news-service';
import { NewsCompleteDTO } from '../models/dtos/api-news-dto';
import NewsCardGroup from '../components/card-grou-news';
import CardNews from '../components/card-news';
import ptBR from '../translations/pt-BR.json';

const NewsList: React.FC = () => {
  const { t } = useTranslation('feature.news.home', ptBR);
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

  if (isLoading) return <div>{'loading'}</div>;
  if (error) return <div>{'error'}</div>;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} 
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center" style={{margin: 10}}>
        <Button variant="contained" onClick={handleOpenAddModal}>{t('button-add-news')}</Button>
      </Grid>
      <Grid item xs={12}>
        <NewsCardGroup>
          {!isLoading && data?.data?.map((news: NewsCompleteDTO) => (
            <CardNews 
              title={news.title}
              imageUrl={news.thumbnail}
              dateTime={news.date_time_publication}
              url={news.url}
              handleOpenDetailsModal={() => handleOpenDetailsModal(news)}
              handleOpenEditModal={() => handleOpenEditModal(news)}
              handleDelete={() => handleDelete(news.id)}
            />
          ))}
        </NewsCardGroup>
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
      </Grid>
    </Grid>
  );
};

export default NewsList;
