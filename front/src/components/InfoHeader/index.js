import { useContext } from 'react';
import RestaurantContext from '../../context/Restaurant/RestaurantContext';
import { Avatar, Container, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Horario from '../Horario';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '10vh',
    paddingBottom: '3vh',
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: 'auto'
  },
  divider: {
    marginBottom: '10px',
  }
}));

const InfoHeader = () => {
  const classes = useStyles();
  const restaurantContext = useContext(RestaurantContext);

  return (
    <Container maxWidth="md" className={classes.root}>
      <Avatar alt="Logo Principal" src={restaurantContext.restaurant?.url_logo} className={classes.large} />
      <Horario />
      <Divider className={classes.divider} />
    </Container>
  );
}

export default InfoHeader;