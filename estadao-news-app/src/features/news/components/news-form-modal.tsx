import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { NewsCompleteDTO } from '../models/dtos/api-news-dto';

interface NewsFormData extends NewsCompleteDTO { }

interface NewsFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: NewsFormData) => void;
  initialData?: NewsFormData | null;
}

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
        <DialogTitle>{initialData ? 'Update News' : 'Add News'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            fullWidth
            variant="outlined"
            {...register("title", { required: true })}
          />
          {/* Adicione mais campos conforme necessário */}
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
