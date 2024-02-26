import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField, 
  DialogActions, 
  Button, 
  styled 
} from '@mui/material';
import { NewsCompleteDTO } from '../models/dtos/api-news-dto';
import { useTranslation } from 'hooks/use-translation';

interface NewsFormData extends NewsCompleteDTO { }

interface NewsFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: NewsFormData) => void;
  initialData?: NewsFormData | null;
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const NewsFormModal: React.FC<NewsFormModalProps> = ({ open, onClose, onSubmit, initialData }) => {
  const { t } = useTranslation('feature.news.modal-form');
  const { register, handleSubmit, reset } = useForm<NewsFormData>();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{initialData ? 'atualizar noticia' : 'nova noticia'}</DialogTitle>
        <DialogContent>
        <TextField
            margin="dense"
            label={t('label-hat')}
            fullWidth
            variant="outlined"
            {...register("hat")}
          />
          <TextField
            margin="dense"
            label={t('label-url')}
            fullWidth
            variant="outlined"
            {...register("url")}
          />
          <TextField
            margin="dense"
            label={t('label-title')}
            fullWidth
            variant="outlined"
            {...register("title", { required: true })}
          />
          <TextField
            margin="dense"
            label={t('label-publication-date')}
            type="datetime-local"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            {...register("date_time_publication")}
          />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            {...register("image")}
          >
            {t('button-image')}
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            {...register("thumbnail")}
          >
            {t('button-thumbnail')}
            <VisuallyHiddenInput type="file" />
          </Button>
          <TextField
            margin="dense"
            label="Conteúdo (HTML)"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            {...register("content")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{t('button-close')}</Button>
          <Button type="submit">{t('button-save')}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default NewsFormModal;
