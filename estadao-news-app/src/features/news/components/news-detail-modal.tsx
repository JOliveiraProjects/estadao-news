import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Link } from '@mui/material';
import { NewsCompleteDTO } from '../models/dtos/api-news-dto';

interface NewsItem extends NewsCompleteDTO { }

interface NewsDetailsModalProps {
  open: boolean;
  onClose: () => void;
  news: NewsItem;
}

const NewsDetailsModal: React.FC<NewsDetailsModalProps> = ({ open, onClose, news }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{news.hat}</DialogTitle>
      <DialogContent>
        <p>Title: {news.title}</p>
        <p>Title: {news.date_time_publication}</p>
        <p>Title: {news.content}</p>
        <img src={news.image} alt="logo" />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewsDetailsModal;
