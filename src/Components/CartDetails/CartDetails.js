import React, { useContext } from 'react';
import Cart from './Cart/Cart';
import EmptyCart from './EmptyCart/EmptyCart';

import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './CartDetailsStyles';
import { ShoppingCartContext } from '../Context/Context';

const CartDetails = () => {
  const classes = useStyles();
  const { cartProducts } = useContext(ShoppingCartContext);
  return (
    <div>
      {cartProducts.length > 0 ? (
        <Card>
          <CardContent className={classes.cardContent}>
            <Typography color='textPrimary' className={classes.cartHeader}>
              Cart
            </Typography>
            <Cart />
          </CardContent>
        </Card>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartDetails;
