import React from 'react';
import { 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Typography, 
  IconButton,
  CardActions,
  Link,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface CardNewsProps {
  title: string;
  imageUrl: string;
  dateTime: string;
  url: string;
  handleOpenEditModal: () => void;
  handleDelete: () => void;
  handleOpenDetailsModal: () => void;
}

var cardStyle = {
  display: 'block',
  transitionDuration: '0.3s',
  height: '25vw'
}

const CardNews: React.FC<CardNewsProps> = ({ 
  title, 
  imageUrl,
  dateTime,
  url,
  handleOpenDetailsModal,
  handleOpenEditModal,
  handleDelete
}) => {


  return (
      <Card variant="outlined" style={cardStyle}>
        <CardActionArea onClick={handleOpenDetailsModal}>
          <CardMedia
              component="img"
              height="194"
              image={imageUrl}
              alt={title}
            />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(dateTime).toLocaleDateString()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing style={{display: 'flex', gap: 3, alignItems: 'center'}}>
          <Link href={url} variant="body2" rel="noreferrer">leia mais</Link>
          <IconButton edge="end" aria-label="edit" onClick={handleOpenEditModal}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>

  );
};

export default CardNews;
