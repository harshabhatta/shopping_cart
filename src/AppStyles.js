import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mobile: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));
