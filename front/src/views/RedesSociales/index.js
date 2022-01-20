import { useContext } from 'react';
import RestaurantContext from '../../context/Restaurant/RestaurantContext';
import { IconButton, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { iconosSociales } from '../../utiles/iconos'

const useStyles = makeStyles((theme) => ({
  text: {
    color: '#737373',
    fontSize: '20px',
    fontWeight: 'bold'
  },
}));

const RedesSociales = () => {
  const classes = useStyles();
  const restaurantContext = useContext(RestaurantContext);
  const redesSociales = restaurantContext.restaurant?.red_socials;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.text}>Encuentranos en:</Typography>
        </Grid>
        {redesSociales && (redesSociales.map((social) => {
          if (social.esta_disponible) {
            return <Grid key={social.id} item xs={12}>
              <a href={social.url} target="_blank" rel="noreferrer">
                <IconButton aria-label={social.nombre}>
                  {iconosSociales(social.icono)}
                </IconButton>
              </a>
            </Grid>
          }
          else {
            return null
          }
        }))
        }
      </Grid>
    </div>
  );
}

export default RedesSociales;