import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import ShoppingCartContext from '../../context/ShoppingCart/ShoppingCartContext';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Divider, Button } from '@material-ui/core';;

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

export default function ProductCard({ id, nombre, descripcion, precio, url_imagen, isDelivery }) {
  const classes = useStyles();
  const history = useHistory();
  const { cartItems, removeItem } = useContext(ShoppingCartContext);
  const isInCart = cartItems.find(item => item.id === id) ? true : false;
  const handleUpdateToCart = () => {
    history.push(`/modificar_carrito/${id}`);
  };
  const handleAddToCart = () => {
    history.push(`/agregar_carrito/${id}`);
  };
  const handleRemoveToCart = () => {
    let response = window.confirm(`¿Estas seguro que deseas remover ${nombre} del carrito?`);
    if (response) {
      removeItem({ id });
    }
  };
  return (
    <div className={classes.root}>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h3" className={classes.name}>{nombre}</Typography>
          <Typography variant="body1" className={classes.description}>{descripcion}</Typography>
          <Typography variant="body2" className={classes.price}>${precio}</Typography>
          {isDelivery &&
            (
              isInCart ?
                (<React.Fragment>
                  <Button size="small" variant="outlined" color="primary" onClick={handleUpdateToCart}>
                    Modificar
                  </Button>
                  <Button size="small" variant="outlined" color="secondary" onClick={handleRemoveToCart}>
                    Limpiar
                  </Button>
                </React.Fragment>
                )
                : (
                  <Button size="small" variant="outlined" color="primary" onClick={handleAddToCart}>
                    Pedir
                  </Button>
                )
            )
          }
        </Grid>
        <Grid item xs={4}>
          <Avatar variant="rounded" src={url_imagen} className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
}