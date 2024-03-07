import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button 
} from '@mui/material';
import HtmlView from 'components/html-view/html-view';
import { useTranslation } from 'hooks/use-translation';
import { NewsCompleteDTO } from '../models/dtos/api-news-dto';
import ptBR from '../translations/pt-BR.json';

interface NewsItem extends NewsCompleteDTO { }

interface NewsDetailsModalProps {
  open: boolean;
  onClose: () => void;
  news: NewsItem;
}

const NewsDetailsModal: React.FC<NewsDetailsModalProps> = ({ open, onClose, news }) => {
  const { t } = useTranslation('feature.news.modal-detail', ptBR);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{news.hat}</DialogTitle>
      <DialogContent>
        <h2>{news.title}</h2>
        <span>{new Date(news.date_time_publication).toLocaleDateString()}</span>
        <HtmlView htmlContent={news.content} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('button-close')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewsDetailsModal;
