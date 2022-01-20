import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import AppContext from '../../context/App/AppContext';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const LoadingAlert = () => {
  const classes = useStyles();
  const appContext = useContext(AppContext);

  return (
    <Backdrop className={classes.backdrop} open={appContext.stateLoadingeAlert}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingAlert;