import { Typography, Button, Grid } from '@material-ui/core';
import { Fragment, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import ShoppingCartContext from '../../context/ShoppingCart/ShoppingCartContext';
import DetailProducts from './detailProducts';
import PaymentMethod from './paymentMethod';
import TypeDelivery from './typeDelivery';
import Totals from './totals';

const Cart = () => {
  const { cartItems, clearCart, total } = useContext(ShoppingCartContext);
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [abono, setAbono] = useState('');
  const [typeDelivery, setTypeDelivery] = useState('');
  const [horaRetiro, setHoraRetiro] = useState('');
  const [quienRecibe, setQuienRecibe] = useState('');
  const [quienRetira, setQuienRetira] = useState('');
  const [direccion, setDireccion] = useState('');
  const handlePaymentMethod = (value) => setPaymentMethod(value);
  const handleAbono = (value) => setAbono(value);
  const handleTypeDelivery = (value) => setTypeDelivery(value);
  const handleHoraRetiro = (value) => setHoraRetiro(value);
  const handleQuienRecibe = (value) => setQuienRecibe(value);
  const handleQuienRetira = (value) => setQuienRetira(value);
  const handleDireccion = (value) => setDireccion(value);

  const handleClearCart = () => {
    let response = window.confirm(`¿Estas seguro que deseas limpiar el carrito ?`);
    if (response) {
      clearCart();
      history.push(`/delivery`);
    }
  };
  const handleGoToDelivery = () => history.push(`/delivery`);
  return (
    <Fragment>
      {cartItems.length > 0 ?
        (<Fragment>
          <Button size="small" color="primary" onClick={handleClearCart}>
            Limpiar carrito
            </Button>
          <Grid container>
            <DetailProducts cartItems={cartItems} />
            <PaymentMethod
              paymentMethod={paymentMethod}
              abono={abono}
              onChangePaymentMethod={handlePaymentMethod}
              onChangeAbono={handleAbono}
            />
            <TypeDelivery
              typeDelivery={typeDelivery}
              horaRetiro={horaRetiro}
              quienRecibe={quienRecibe}
              quienRetira={quienRetira}
              direccion={direccion}
              onChangeTypeDelivery={handleTypeDelivery}
              onChangeHoraRetiro={handleHoraRetiro}
              onChangeQuienRecibe={handleQuienRecibe}
              onChangeQuienRetira={handleQuienRetira}
              onChangeDireccion={handleDireccion}
              clearCart={clearCart}
            />
          </Grid>
          <Totals
            cartItems={cartItems}
            total={total}
            paymentMethod={paymentMethod}
            abono={abono}
            typeDelivery={typeDelivery}
            horaRetiro={horaRetiro}
            quienRecibe={quienRecibe}
            quienRetira={quienRetira}
            direccion={direccion}
            clearCart={clearCart}
          />
        </Fragment>
        ) :
        (<Fragment>
          <Typography> Carrito vacio, puedes agregar producto en: </Typography>
          <Button size="small" color="primary" onClick={handleGoToDelivery}>
            Delivery
          </Button>
        </Fragment>
        )
      }
    </Fragment>
  );
}

export default Cart;