import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { ShoppingCartContext } from '../../Context/Context';
import useStyles from './CartSummaryStyles';

const CartSummary = () => {
  const classes = useStyles();
  const {
    cartProducts,
    cartProductsTotalPrice,
    cartProductsQuantity,
  } = useContext(ShoppingCartContext);
  return (
    <>
      <TableContainer className={classes.table}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align='right'>Quantity</TableCell>
              <TableCell align='right'>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell component='th' scope='row'>
                  {product.name}
                </TableCell>
                <TableCell align='right'>{product.quantity}</TableCell>
                <TableCell align='right'>{`₹${
                  product.price * product.quantity
                }`}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              {/* <TableCell rowSpan={1} /> */}
              <TableCell colSpan={2} align='right'>
                {cartProductsQuantity}
              </TableCell>
              <TableCell align='right'>{`₹${cartProductsTotalPrice}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartSummary;
