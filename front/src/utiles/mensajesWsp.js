const generarMensaje = (cartItems, total, paymentMethod,
  abono, typeDelivery, horaRetiro, quienRecibe, quienRetira,
  direccion, delivery) => {
  let saltoLinea = '%0A';
  let mensaje = `Hola, Quiero realizar el siguiente pedido:${saltoLinea}${saltoLinea}`
  for (let item of cartItems) {
    mensaje += `• ${item.cantidad} x ${item.nombre} | $${item.cantidad * item.precio}${saltoLinea}`;
  }
  mensaje += saltoLinea;
  if (typeDelivery === 'delivery') {
    mensaje += `- Tipo de entrega: Delivery${saltoLinea}`;
    mensaje += `- Recibe: ${quienRecibe}${saltoLinea}`;
    mensaje += `- Dirección: ${direccion}${saltoLinea}`;
  } else {
    mensaje += `- Tipo de entrega: Retiro en local${saltoLinea}`;
    mensaje += `- Retira: ${quienRetira}${saltoLinea}`;
    mensaje += `- Hora: ${horaRetiro}${saltoLinea}`;
  }
  mensaje += saltoLinea;
  if (paymentMethod === 'efectivo') {
    mensaje += `- Metodo de pago: Efectivo${saltoLinea}`;
    mensaje += `- Pago con: ${abono}${saltoLinea}`;
  } else {
    mensaje += `- Metodo de pago: Tarjeta Credito/Debito${saltoLinea}`;
  }
  mensaje += saltoLinea;
  if (typeDelivery === 'delivery') {
    mensaje += `- SubTotal: $${total}${saltoLinea}`;
    mensaje += `- Costo de entrega: $${delivery}${saltoLinea}`;
    mensaje += `- Total del pedido: $${total + delivery}${saltoLinea}`;
  } else {
    mensaje += `- Total del pedido: $${total}${saltoLinea}`;
  }
  return mensaje;
}

export {
  generarMensaje
}