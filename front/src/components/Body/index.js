import { Container } from '@material-ui/core';
import Delivery from '../../views/Delivery';
import Carta from '../../views/Carta';
import RedesSociales from '../../views/RedesSociales';
import Ubicacion from '../../views/Ubicacion';
import Horario from '../../views/Horario';
import Inicio from '../../views/Inicio';
import AddCart from '../../views/AddCart';
import UpdateCart from '../../views/UpdateCart';
import Cart from '../../views/Cart';
import { Switch, Route } from "react-router-dom";

const Body = () => {
  return (
    <Container maxWidth="md">
      <Switch>
        <Route path="/modificar_carrito/:id">
          <UpdateCart />
        </Route>
        <Route path="/agregar_carrito/:id">
          <AddCart />
        </Route>
        <Route path="/carrito">
          <Cart />
        </Route>
        <Route path="/redes">
          <RedesSociales />
        </Route>
        <Route path="/ubicacion">
          <Ubicacion />
        </Route>
        <Route path="/horario">
          <Horario />
        </Route>
        <Route path="/carta">
          <Carta />
        </Route>
        <Route path="/delivery">
          <Delivery />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Container>
  );
}

export default Body;