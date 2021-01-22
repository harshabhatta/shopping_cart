import React from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import useStyles from './MenuFilterStyles';

const MenuFilter = (props) => {
  const classes = useStyles();
  const { MenuDetails } = props;
  // get unique types of products
  const filterTypes = ['All', ...new Set(MenuDetails.map((menu) => menu.type))];
  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={props.filterValue}
          onChange={props.filterMenu}
          inputProps={{
            name: 'MenuFilter',
          }}
        >
          {filterTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default MenuFilter;
