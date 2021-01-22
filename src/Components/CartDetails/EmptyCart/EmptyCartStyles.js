import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 600,
  },
  pos: {
    marginBottom: '0.8rem',
    fontSize: '0.8rem',
  },
  icon: {
    height: '40%',
    width: '40%',
  },
}));
