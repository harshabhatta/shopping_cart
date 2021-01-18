import React from 'react';
import classes from './Home.module.css';
import Logo from '../../Assets/bake_logo.png';

const Home = () => {
  return (
    <div className={classes.home_container}>
      <img src={Logo} alt='Logo' style={{ width: '5%' }} />
    </div>
  );
};

export default Home;
