function Calcular(precio, cantidad, TI) {
  const precio_neto = precio * cantidad;
  let descuento = 0;
  if (precio_neto >= 1000 && precio_neto<3000) {
    descuento = precio_neto * 0.03;
  }
  
  
  const precio_neto_con_descuento = precio_neto - descuento;
  const impuesto = precio_neto_con_descuento * (TI / 100);
  const total_con_impuesto = precio_neto_con_descuento + impuesto;

  return parseFloat(total_con_impuesto.toFixed(2));
}

export default Calcular;