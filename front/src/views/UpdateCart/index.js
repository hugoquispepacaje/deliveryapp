import { useParams, useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import ShoppingCartContext from '../../context/ShoppingCart/ShoppingCartContext';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { TextField, IconButton, Typography } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '20px',
  },
  media: {
    height: 300,
    objectFit: 'cover'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: '0px'
  },
  description: {
    fontSize: '20px',
    textAlign: 'center',
    marginBottom: '0px'
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '0px'
  }
}));

const UpdateCart = () => {
  const classes = useStyles();
  const { updateItem, cartItems } = useContext(ShoppingCartContext);
  const [cantidad, setCantidad] = useState(1);
  const [notasAdicionales, setNotasAdicionales] = useState('');
  const [product, setProduct] = useState({});
  let history = useHistory();
  let { id } = useParams();
  useEffect(() => {
    const productInCart = cartItems.find(item => item.id === parseInt(id));
    if (productInCart) {
      setProduct(productInCart);
      setCantidad(productInCart.cantidad);
      setNotasAdicionales(productInCart.notasAdicionales);
    } else {
      history.push('/delivery');
    }
  }, [cartItems, id, history]);
  const handleIncrease = () => {
    setCantidad(cantidad + 1);
  };
  const handleDecrease = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };
  const handleUpdateProduct = () => {
    updateItem({
      id: product.id,
      id_categoria: product.id_categoria,
      nombre: product.nombre,
      descripcion: product.descripcion,
      precio: product.precio,
      url_imagen: product.url_imagen,
      cantidad,
      notasAdicionales
    });
    handleBack();
  };
  const handleBack = () => {
    history.push('/delivery');
  };
  return (
    <Card className={classes.root}>
      {product?.url_imagen && <CardMedia
        className={classes.media}
        image={product?.url_imagen}
        title={product?.nombre}
      />}
      <CardContent>
        <Typography className={classes.title} variant="body2" component="p">
          {product?.nombre}
        </Typography>
        <Typography className={classes.description} variant="body2" component="p">
          {product?.descripcion}
        </Typography>
        <Typography className={classes.price} variant="body2" component="p">
          {'$' + product?.precio}
        </Typography>
        <Typography variant="body2" component="p">Cantidad</Typography>
        <IconButton aria-label="remove" onClick={handleDecrease}>
          <Remove />
        </IconButton>
        {cantidad}
        <IconButton aria-label="add" onClick={handleIncrease}>
          <Add />
        </IconButton>
        <Typography variant="body2" component="p">Notas Adicionales</Typography>
        <TextField id="notas_adicionales" type="text" fullWidth={true} onChange={e => setNotasAdicionales(e.target.value)} value={notasAdicionales} />
      </CardContent>
      <CardActions>
        <Button onClick={handleBack} color="primary">Cancelar</Button>
        <Button onClick={handleUpdateProduct} color="primary">Modificar</Button>
      </CardActions>
    </Card>
  );
}

export default UpdateCart;