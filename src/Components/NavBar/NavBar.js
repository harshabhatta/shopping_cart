import React, { useContext } from 'react';
import {
  Badge,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { ShoppingCartContext } from '../Context/Context';
import useStyles from './NavBarStyles';
import Logo from '../../Assets/bake_logo.png';

const NavBar = (props) => {
  const classes = useStyles();
  const { cartProductsQuantity } = useContext(ShoppingCartContext);
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Nitin's Bake House
          </Typography>
          <Typography variant='h6' className={classes.contImg}>
            <img src={Logo} alt='logo' className={classes.logo} />
          </Typography>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={() => props.toggleDrawer(true)}
          >
            <Badge color='secondary' badgeContent={cartProductsQuantity}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
