import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { ShoppingCartContext } from '../../Context/Context';
import Counter from '../Counter/Counter';
import useStyles from './CartSummaryStyles';

const CartSummary = () => {
  const classes = useStyles();
  const {
    cartProducts,
    DeleteFromCart,
    ManipulateCart,
    AddToCart,
  } = useContext(ShoppingCartContext);
  return (
    <>
      {cartProducts.length === 0 ? (
        <Typography color='textPrimary'>
          Your Cart is Empty. Add Delicious products
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align='right'>Quantity</TableCell>
                <TableCell align='right'>Amount</TableCell>
                <TableCell align='right'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell component='th' scope='row'>
                    {product.name}
                  </TableCell>
                  <TableCell align='right'>
                    <Counter
                      product={product}
                      incrementCtr={AddToCart}
                      decrementCtr={ManipulateCart}
                    />
                  </TableCell>
                  <TableCell align='right'>{`₹${
                    product.price * product.quantity
                  }`}</TableCell>
                  <TableCell align='right'>
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => DeleteFromCart(product.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default CartSummary;
