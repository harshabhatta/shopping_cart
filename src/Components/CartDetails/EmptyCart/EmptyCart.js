import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import useStyles from './EmptyCartStyles';

const EmptyCart = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.container}>
        <ShoppingCartRoundedIcon className={classes.icon} />
        <Typography className={classes.title} color='textPrimary'>
          Cart Empty
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Treat yourself to some deliciousness
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmptyCart;
