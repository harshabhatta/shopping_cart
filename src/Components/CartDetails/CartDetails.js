import React from 'react';
import Cart from './Cart/Cart';
import CartSummary from './CartSummary/CartSummary';

import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './CartDetailsStyles';
import { ShoppingCartContext } from '../Context/Context';

const CartDetails = () => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography color='textPrimary' className={classes.cartHeader}>
            Cart
          </Typography>
          <Cart />
          {/* <CartSummary /> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default CartDetails;
