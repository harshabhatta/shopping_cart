import React from 'react';
import { Drawer, IconButton, Typography } from '@material-ui/core';
import useStyles from './DrawerStyles';
import CartDetails from '../CartDetails/CartDetails';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const DrawerDetails = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        classes={{ paper: classes.list }}
        anchor='right'
        open={props.open}
        onClose={() => props.toggleDrawer(false)}
      >
        <IconButton
          classes={{ root: classes.root }}
          onClick={() => props.toggleDrawer(false)}
        >
          <ArrowBackIcon />
          <Typography color='textPrimary'>Back</Typography>
        </IconButton>
        <CartDetails />
      </Drawer>
    </div>
  );
};

export default DrawerDetails;
