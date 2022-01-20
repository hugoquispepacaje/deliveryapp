import { Fragment } from 'react';
import { Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Grid, TextField } from '@material-ui/core';

const TypeDelivery = ({ typeDelivery, horaRetiro, quienRecibe, quienRetira, direccion,
  onChangeTypeDelivery, onChangeHoraRetiro, onChangeQuienRecibe, onChangeQuienRetira, onChangeDireccion }) => {

  const handleTypeDelivery = (event) => onChangeTypeDelivery(event.target.value);
  const handleHoraRetiro = (event) => onChangeHoraRetiro(event.target.value);
  const handleQuienRecibe = (event) => onChangeQuienRecibe(event.target.value);
  const handleQuienRetira = (event) => onChangeQuienRetira(event.target.value);
  const handleDireccion = (event) => onChangeDireccion(event.target.value);

  return (
    <Grid item xs={12}>
      <form noValidate autoComplete="off">
        <FormControl component="fieldset">
          <FormLabel component="legend">Tipo de Envió</FormLabel>
          <RadioGroup aria-label="delivery" name="typeDelivery" value={typeDelivery} onChange={handleTypeDelivery}>
            <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
            {typeDelivery === 'delivery' ? (
              <Fragment>
                <TextField id="quien_recibe" label="¿Quien recibe?" value={quienRecibe} onChange={handleQuienRecibe} />
                <TextField id="direccion" label="Dirección" value={direccion} onChange={handleDireccion} />
              </Fragment>
            ) : null
            }
            <FormControlLabel value="retiro" control={<Radio />} label="Retiro en Local" />
            {typeDelivery === 'retiro' ? (
              <Fragment>
                <TextField id="quien_retira" label="¿Quien Retira?" value={quienRetira} onChange={handleQuienRetira} />
                <TextField id="hora_retiro" label="¿A que hora retira?" type="time" value={horaRetiro} onChange={handleHoraRetiro} />
              </Fragment>
            ) : null
            }
          </RadioGroup>
        </FormControl>
      </form>
    </Grid>
  );
}
export default TypeDelivery;