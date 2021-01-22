import React, { useContext, useState } from 'react';
import { Grid } from '@material-ui/core';

import { MenuDetails } from '../../Assets/MenuDetails/MenuDetails';
import ProductCard from './Products/ProductCard';
import MenuSearch from './MenuSearch/MenuSearch';
import MenuFilter from './MenuFilter/MenuFilter';
import { ShoppingCartContext } from '../Context/Context';

import useStyles from './MenuStyles';

const Menu = () => {
  const classes = useStyles();
  const [searchData, setSearchData] = useState('');
  const [filterData, setfilterData] = useState('All');
  const { AddToCart } = useContext(ShoppingCartContext);

  //dynamic filtering of products based on filter
  const filteredMenuDetails =
    filterData === 'All'
      ? MenuDetails
      : MenuDetails.filter((menu) => menu.type === filterData);

  // dynamic filtering of products based on search
  const searchedMenuDetails = filteredMenuDetails.filter((menu) =>
    menu.name.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          Menu
        </Grid>
        <Grid item xs={3}>
          <MenuFilter
            MenuDetails={MenuDetails}
            filterValue={filterData}
            filterMenu={(event) => setfilterData(event.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <MenuSearch
            searchMenu={(event) => setSearchData(event.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.container}>
        {searchedMenuDetails.map((menu) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={menu.id}>
              <ProductCard menu={menu} addToCart={AddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Menu;
