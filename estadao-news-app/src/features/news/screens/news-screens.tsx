import React, { useCallback } from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import { 
  useAddNewsMutation, 
  useDelNewsMutation, 
  useEditNewsMutation, 
  useGetAllNewsQuery, 
  useLazyGetOneNewsQuery 
} from '../services/news-service';

export default function NewsList() {
  const { t } = useTranslation();
  const { data, error, isLoading } = useGetAllNewsQuery();
  const [oneNews, oneNewsState] = useLazyGetOneNewsQuery();
  const [deleteNews, deleteNewsState] = useDelNewsMutation();
  const [addNews, addNewsState] = useAddNewsMutation();
  const [editNews, editNewsState] = useEditNewsMutation();
  

  const handleDelete = useCallback(async (id: string) => {
    const data = await deleteNews({ id });
  }, []);

  const handleEdit = useCallback(async (id: string) => {
    const data = await deleteNews({ id });
  }, []);

  const handleAdd = useCallback(async (id: string) => {
    const data = await deleteNews({ id });
  }, []);

  const handleOne = useCallback(async (id: string) => {
    const data = await oneNews({ id });
  }, []);

  if (isLoading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('error')}</div>;

  return (
    <List>
      {!isLoading && data?.data?.map((news) => (
        <ListItem key={news.id} secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(news.id)}>
            <DeleteIcon />
          </IconButton>
        }>
          <ListItemText 
            primary={news.title} 
            secondary={new Date(news.date_time_publication).toLocaleDateString()} 
          />
        </ListItem>
      ))}
    </List>
  );
}
