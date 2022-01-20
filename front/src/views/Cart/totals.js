import { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import { Paper, Grid, Button } from '@material-ui/core';
import { useContext } from 'react';
import { generarMensaje } from '../../utiles/mensajesWsp'
import TotalsLines from './totalsLines';
import RestaurantContext from '../../context/Restaurant/RestaurantContext';

const Totals = ({ cartItems, total, paymentMethod, abono, typeDelivery, horaRetiro, quienRecibe, quienRetira, direccion, clearCart }) => {
  const isDelivery = typeDelivery === 'delivery' ? true : false;
  const restaurantContext = useContext(RestaurantContext);
  const whatsapp = restaurantContext?.restaurant?.whatsapp;
  const precioDelivery = 2000;
  const history = useHistory();
  const handleConfirmOrder = () => {
    if (validarCarrito()) {
      let response = window.confirm(`¿Estas seguro de confirmar el pedido?`);
      if (response) {
        let mensajeWsp = generarMensaje(cartItems, total, paymentMethod,
          abono, typeDelivery, horaRetiro, quienRecibe, quienRetira,
          direccion, precioDelivery);
        window.open(`https://api.whatsapp.com/send?phone=${whatsapp}&text=${mensajeWsp}`);
        clearCart();
        history.push(`/`);
      }
    }
  }
  const validarCarrito = () => {
    if (paymentMethod === '' || typeDelivery === '') {
      alert('Se deben seleccionar los campos.');
      return false;
    }
    if (paymentMethod === 'efectivo') {
      if (abono === '') {
        alert('Se deben ingresar el abono.');
        return false;
      } else if (abono < 1) {
        alert('El abono debe ser mayor a 1.');
        return false;
      }
    }
    if (typeDelivery === 'delivery') {
      if (quienRecibe === '') {
        alert('Se deben ingresar quien recibe.');
        return false;
      }
      if (direccion === '') {
        alert('Se deben ingresar la dirección.');
        return false;
      }
    } else if (typeDelivery === 'retiro') {
      if (quienRetira === '') {
        alert('Se deben ingresar quien retira.');
        return false;
      }
      if (horaRetiro === '') {
        alert('Se deben ingresar la hora de retiro.');
        return false;
      }
    }
    return true;
  }
  return (
    <Paper elevation={3}>
      <Grid container>
        <Grid item xs={12}>
          <TotalsLines title='SubTotal:' amount={total} />
          {isDelivery ?
            (<Fragment>
              <TotalsLines title='Costo Delivery:' amount={precioDelivery} />
              <TotalsLines title='Total:' amount={total + precioDelivery} isImportant={true} />
            </Fragment>) :
            (<TotalsLines title='Total:' amount={total} isImportant={true} />)
          }
        </Grid>
      </Grid>
      <Button size="small" color="primary" onClick={handleConfirmOrder}>
        Confirmar Pedido
      </Button>
    </Paper>
  );
}

export default Totals;