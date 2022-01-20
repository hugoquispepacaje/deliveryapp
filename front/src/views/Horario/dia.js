import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '10px',
  },
  dia: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(14),
    flexShrink: 0,
  },
  abierto: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
  },
  cerrado: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    color: '#ae423f',
  }
}));

export default function Dia({ dia, hora_inicio, hora_fin, esta_disponible }) {
  const classes = useStyles();
  hora_inicio = hora_inicio.slice(0, 5);
  hora_fin = hora_fin.slice(0, 5);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="h3" className={classes.dia}>{dia}</Typography>
        </Grid>
        <Grid item xs={8}>
          {esta_disponible ?
            (<Typography variant="body1" className={classes.abierto}>{'De ' + hora_inicio + ' a ' + hora_fin}</Typography>)
            : (<Typography variant="body1" className={classes.cerrado}>Cerrado</Typography>)
          }
        </Grid>
      </Grid>
    </div>
  );
}