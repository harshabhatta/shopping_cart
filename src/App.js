import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Checkout from './Components/Checkout/Checkout';
import useStyles from './AppStyles';

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route exact path='/menu' component={ShoppingCart} />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </Router>
  );
};

export default App;
