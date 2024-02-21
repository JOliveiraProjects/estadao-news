import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface NewsItem {
  title: string;
}

interface NewsDetailsModalProps {
  open: boolean;
  onClose: () => void;
  news: NewsItem;
}

const NewsDetailsModal: React.FC<NewsDetailsModalProps> = ({ open, onClose, news }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>News Details</DialogTitle>
      <DialogContent>
        <p>Title: {news.title}</p>
        {/* Mostre outros detalhes da notícia aqui */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewsDetailsModal;
