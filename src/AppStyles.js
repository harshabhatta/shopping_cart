import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  shopDetails: {
    margin: '0.8rem 0',
  },
  cartDetails: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));
