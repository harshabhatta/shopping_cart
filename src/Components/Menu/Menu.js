import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import { MenuDetails } from '../../Assets/MenuDetails/MenuDetails';
import ProductCard from './Products/ProductCard';
import { ShoppingCartContext } from '../Context/Context';

import useStyles from './MenuStyles';

const Menu = () => {
  const classes = useStyles();
  const { AddToCart } = useContext(ShoppingCartContext);

  return (
    <Grid container spacing={2} className={classes.container}>
      {MenuDetails.map((menu) => {
        return (
          <Grid item xs={12} sm={6} lg={4} key={menu.id}>
            <ProductCard
              menu={menu}
              addToCart={AddToCart}
              // title={menu.name}
              // description={menu.description}
              // image={menu.imageUrl}
              // price={menu.price}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Menu;
