import React from 'react';
import useStyles from './CounterStyles';
import { Button, ButtonGroup } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Counter = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ButtonGroup size='small' aria-label='small outlined button group'>
        <Button onClick={() => props.decrementCtr(props.product)}>
          <RemoveIcon />
        </Button>
        <Button disabled className={classes.counterInput}>
          {props.product.quantity}
        </Button>
        <Button onClick={() => props.incrementCtr(props.product)}>
          <AddIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
