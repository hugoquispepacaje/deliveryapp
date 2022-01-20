import { Button, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'raw',
  },
  button: {
    fontWeight: 'bold',
    fontSize: '14px',
  },
  text: {
    color: '#737373',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '20px',
    fontWeight: 'bold'
  },
}));

const Inicio = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.text}>Elige una:</Typography>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        component={Link}
        to='carta'
      >Carta</Button>
      <Button
        color="secondary"
        variant="contained"
        className={classes.button}
        component={Link}
        to='delivery'
      >Delivery</Button>
    </div>
  );
}

export default Inicio;