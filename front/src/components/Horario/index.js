import { useContext } from 'react';
import RestaurantContext from '../../context/Restaurant/RestaurantContext';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { convertirFormatoAHora } from '../../utiles/utiles'

const useStyles = makeStyles((theme) => ({
  open: {
    color: 'green',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '25px',
    fontWeight: 'bold'
  },
  close: {
    color: 'red',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '25px',
    fontWeight: 'bold'
  },
}));

const Horario = () => {
  const classes = useStyles();
  const restaurantContext = useContext(RestaurantContext);
  const horarios = restaurantContext?.restaurant?.horarios;

  let fechaActual = new Date();
  let diaActual = horarios ? horarios.find(dia => dia.nro_dia === fechaActual.getDay()) : 0;
  let horaInicio = horarios ? convertirFormatoAHora(diaActual.hora_inicio) : 0;
  let horaFin = horarios ? convertirFormatoAHora(diaActual.hora_fin) : 0;
  let isOpen = (fechaActual >= horaInicio && fechaActual <= horaFin) && diaActual?.esta_disponible;

  return (
    <Typography variant="h2" className={isOpen ? classes.open : classes.close}>{isOpen ? 'Abierto' : 'Cerrado'}</Typography>
  );
}

export default Horario;