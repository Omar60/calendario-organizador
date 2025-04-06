// Configuracion centralizada de las constantes de la aplicacion
// v.0.1.0

// Configuracion para la base de datos
export const DB = {
  NAME: "calendario-organizador",
  VERSION: 1,
  STORES: {
    ACTIVIDADES: "actividades",
  },
  INDEXES: {
    FECHA: "fecha",
  },
};

// Definimos el formato de fecha
export const DATE_FORMAT = {
  DISPLAY: "DD/MM/YYYY",
  ISO: "YYYY-MM-DD",
  FULL: "EEEE, d MMMM yyyy",
};

// Definicion de los valores maximos
export const LIMITS = {
  TAMAÑO_MAXIMO_TITULO: 100,
  TAMAÑO_MAXIMO_DESCRIPCION: 500,
};
