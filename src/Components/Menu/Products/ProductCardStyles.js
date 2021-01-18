import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    minHeight: 380,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    marginTop: '5px',
    color: '#fff',
    backgroundColor: '#5EB616',
    '&:hover': {
      backgroundColor: '#ffff',
      color: '#5EB616',
    },
  },

  price: {
    marginRight: '40px',
  },
  description: {
    fontStyle: 'italic',
  },
}));
