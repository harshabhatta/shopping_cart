import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '3rem',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  contImg: {
    flexGrow: 1,
  },
  navbar: {
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'static',
    },
    backgroundColor: '#fff',
    color: '#000',
  },
  logo: {
    width: '50px',
  },
}));
