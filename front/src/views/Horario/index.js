import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import RestaurantContext from '../../context/Restaurant/RestaurantContext';
import Dia from './dia';
const Horario = () => {
  const restaurantContext = useContext(RestaurantContext);
  const horarios = restaurantContext.restaurant?.horarios;
  return (
    <div>
      { horarios && (
        <Grid container>
          <Grid item xs={12}>
            {horarios.map((horario) => <Dia key={horario.id} {...horario} />)}
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Horario;