import { useContext } from 'react';
import RestaurantContext from '../../context/Restaurant/RestaurantContext';
import { Container, Grid, IconButton } from '@material-ui/core';
import { WhatsApp, Mail, Phone } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '10vh',
    paddingBottom: '3vh',
  }
}));

const ContactInfo = () => {
  const classes = useStyles();
  const restaurantContext = useContext(RestaurantContext);
  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <a
            href={`https://api.whatsapp.com/send?phone=${restaurantContext.restaurant?.whatsapp}&text=${restaurantContext.restaurant?.mensaje_wsp}`}
            target="_blank"
            rel="noreferrer"
          >
            <IconButton aria-label="Whatsapp">
              <WhatsApp />
            </IconButton>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a href={`tel:${restaurantContext.restaurant?.telefono}`}>
            <IconButton aria-label="Llamar">
              <Phone />
            </IconButton>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a href={`mailto:${restaurantContext.restaurant?.correo}`}>
            <IconButton aria-label="Email">
              <Mail />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactInfo;