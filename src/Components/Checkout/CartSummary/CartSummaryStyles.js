import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  table: {
    width: '50%',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));
