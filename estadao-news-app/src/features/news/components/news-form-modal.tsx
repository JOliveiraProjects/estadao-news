import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, styled } from '@mui/material';
import { NewsCompleteDTO } from '../models/dtos/api-news-dto';

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
            label="Chapéu"
            fullWidth
            variant="outlined"
            {...register("hat")}
          />
          <TextField
            margin="dense"
            label="URL"
            fullWidth
            variant="outlined"
            {...register("url")}
          />
          <TextField
            margin="dense"
            label="Título"
            fullWidth
            variant="outlined"
            {...register("title", { required: true })}
          />
          <TextField
            margin="dense"
            label="Data e Hora da Publicação"
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
            Carregar Imagem
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            {...register("thumbnail")}
          >
            Carregar Thumbnail
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
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default NewsFormModal;
