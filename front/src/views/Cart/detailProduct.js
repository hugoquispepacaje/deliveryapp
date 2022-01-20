import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import ShoppingCartContext from '../../context/ShoppingCart/ShoppingCartContext';
import { Grid, Divider, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '10px',
  },
  name: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(14),
    flexShrink: 0,
  },
  description: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
  },
  price: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
  },
  image: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto'
  },
  divider: {
    marginBottom: '10px',
  }
}));

const DetailProduct = ({ id, nombre, precio, cantidad }) => {
  const classes = useStyles();
  const { removeItem } = useContext(ShoppingCartContext);
  const history = useHistory();

  const handleUpdateToCart = () => {
    history.push(`/modificar_carrito/${id}`);
  };
  const handleRemoveToCart = () => {
    let response = window.confirm(`Estas seguro que deseas remover ${nombre} del carrito ?`);
    if (response) {
      removeItem({ id });
    }
  };

  return (
    <div className={classes.root}>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h3" className={classes.name}>{`${cantidad} x ${nombre}`}</Typography>
          <Button size="small" variant="outlined" color="primary" onClick={handleUpdateToCart}>
            Modificar
          </Button>
          <Button size="small" variant="outlined" color="secondary" onClick={handleRemoveToCart}>
            Remover
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" className={classes.description}>{'Precio: $' + precio}</Typography>
          <Typography variant="body2" className={classes.price}>{'Total: $' + (precio * cantidad)}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailProduct;