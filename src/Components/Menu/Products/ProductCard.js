import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
} from '@material-ui/core';

import useStyles from './ProductCardStyles';

const ProductCard = (props) => {
  const classes = useStyles();
  const { name, description, imageUrl, price } = props.menu;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            Veg
          </Avatar>
        }
        title={name}
      />
      <CardMedia className={classes.media} image={imageUrl} title={name} />
      <CardContent>
        <Typography
          variant='body2'
          component='p'
          className={classes.description}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant='outlined'
          className={classes.button}
          fullWidth
          onClick={() => props.addToCart(props.menu)}
        >
          <span className={classes.price}>₹{price}</span>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
