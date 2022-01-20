const convertirFormatoAHora = (hora) => {
  let horaConvertida = new Date();
  let [hours, minutes, seconds] = hora.split(':');
  horaConvertida.setHours(+hours);
  horaConvertida.setMinutes(minutes);
  horaConvertida.setSeconds(seconds);
  return horaConvertida;
}

export {
  convertirFormatoAHora
}