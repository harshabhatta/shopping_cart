import React, { useContext } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { ShoppingCartContext } from '../../Context/Context';
import Counter from '../Counter/Counter';
import useStyles from './CartStyles';

const Cart = () => {
  const classes = useStyles();
  const {
    cartProducts,
    DeleteFromCart,
    ManipulateCart,
    AddToCart,
    cartProductsTotalPrice,
  } = useContext(ShoppingCartContext);
  return (
    <div>
      <List className={classes.list}>
        {cartProducts.map((product) => {
          return (
            <ListItem key={product.id}>
              <ListItemText
                primary={product.name}
                secondary={`₹${product.price * product.quantity}`}
              />
              <Counter
                product={product}
                incrementCtr={AddToCart}
                decrementCtr={ManipulateCart}
              />
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() => DeleteFromCart(product.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary='Total' />
        </ListItem>
        <ListItemSecondaryAction>
          <Typography variant='h6' component='p'>
            {`₹ ${cartProductsTotalPrice}`}
          </Typography>
        </ListItemSecondaryAction>
      </List>
    </div>
  );
};

export default Cart;
