import React, { useState } from 'react';
import Menu from './Components/Menu/Menu';
import NavBar from './Components/NavBar/NavBar';
import { Grid } from '@material-ui/core';
import CartDetails from './Components/CartDetails/CartDetails';
import DrawerDetails from './Components/Drawer/Drawer';
import useStyles from './AppStyles';

const App = () => {
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

export default App;
