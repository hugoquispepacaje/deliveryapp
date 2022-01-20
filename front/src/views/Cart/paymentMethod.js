import { Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Grid, TextField } from '@material-ui/core';

const PaymentMethod = ({ paymentMethod, abono, onChangePaymentMethod, onChangeAbono }) => {
  const handlePaymentMethod = (event) => onChangePaymentMethod(event.target.value);
  const handleAbono = (event) => {
    event.target.value > 0 && onChangeAbono(event.target.value);
    event.target.value === '' && onChangeAbono('');
  };
  return (
    <Grid item xs={12}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Metodo de Pago</FormLabel>
        <RadioGroup aria-label="method" name="paymentMethod" value={paymentMethod} onChange={handlePaymentMethod}>
          <FormControlLabel value="efectivo" control={<Radio />} label="Efectivo" />
          {paymentMethod === 'efectivo' ? <TextField id="abono" label="¿Con cuanto pagas?" value={abono} onChange={handleAbono} type='number' /> : null}
          <FormControlLabel value="tarjeta" control={<Radio />} label="Tarjeta Credito/Debito" />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
export default PaymentMethod;