// Archivo de utilidades para el manejo de las fechas
// v.0.1.0

// Formateo de fecha para el formato ISO YYYY-MM-DD
export const formateoFechaISO = (fecha) => {
  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");
  return `${anio}-${mes}-${dia}`;
};

// Formateo de fecha para el formato DD/MM/YYYY
export const formateoFechaVista = (fecha) => {
  const fechaObjeto = fecha instanceof Date ? fecha : new Date(fecha);
  const dia = String(fechaObjeto.getDate()).padStart(2, "0");
  const mes = String(fechaObjeto.getMonth() + 1).padStart(2, "0");
  const anio = fechaObjeto.getFullYear();
  return `${dia}/${mes}/${anio}`;
};

// Funcion para obtener el primer dia del mes
export const primerDiaDelMes = (anio, mes) => {
  return new Date(anio, mes, 1).getDay();
};

// Funcion para obtener el numero de dias del mes
export const diasDelMes = (anio, mes) => {
  return new Date(anio, mes + 1, 0).getDate();
};

// Funcion para obtener una matriz de dias de un mes
export const obtenerMatrizDiasMes = (anio, mes) => {
  const primeroDia = primerDiaDelMes(anio, mes);
  const diasEnMes = diasDelMes(anio, mes);

  const dias = [];
  for (let i = 0; i < primeroDia; i++) {
    dias.push(null);
  }
  for (let i = 1; i <= diasEnMes; i++) {
    dias.push(i);
  }
  return dias;
};

// Nombre de los meses
export const nombresMeses = () => {
  return [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
};

// Nombre de los dias de la semana
export const nombresDias = (corto = false) => {
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  return corto ? diasSemana.map((dia) => dia.substring(0, 3)) : diasSemana;
};
