import React from 'react';
import { Grid } from '@mui/material';
import NewsCard from './card-news';

interface NewsCardGroupProps {
    children: React.ReactNode;
}

const NewsCardGroup: React.FC<NewsCardGroupProps> = ({ children }) => {
    return (
        <Grid container spacing={2}>
            {React.Children.map(children, (child, index) => (
                React.isValidElement(child) && child.type === NewsCard ? (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    {child}
                </Grid>
                ) : null
            ))}
        </Grid>
    );
};

export default NewsCardGroup;