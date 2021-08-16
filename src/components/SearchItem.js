import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const PlaylistItem = ({ data }) => {
  const classes = useStyles();
  const { videoId } = data.id;
  const { title, description, thumbnails } = data.snippet;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={thumbnails.medium.url}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
              {title}
            </Link>
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default PlaylistItem;
