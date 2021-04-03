import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './ShoppingCartStyles';

import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';
import CartDetails from '../CartDetails/CartDetails';
import DrawerDetails from '../Drawer/Drawer';

const ShoppingCart = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <NavBar toggleDrawer={setDrawerOpen} />
      <Grid container>
        <Grid item xs={12}>
          <DrawerDetails toggleDrawer={setDrawerOpen} open={drawerOpen} />
        </Grid>
      </Grid>
      <Grid container className={classes.shopDetails}>
        <Grid item xs={12} sm={8}>
          <Menu />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.cartDetails}>
          <CartDetails />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShoppingCart;
