// Configuración para IndexedDB
// v.0.1.0

import { DB } from "../../constants/appConstants.js";

let instanciaDB = null;

// Inicializamos la conexion a la base de datos
export const inicializarDB = () => {
  return new Promise((resolve, reject) => {
    if (instanciaDB) {
      resolve(instanciaDB);
      return;
    }
    const solicitud = indexedDB.open(DB.NAME, DB.VERSION);
    solicitud.onupgradeneeded = (evento) => {
      const db = evento.target.result;

      if (!db.objectStoreNames.contains(DB.STORES.ACTIVIDADES)) {
        const almacenActividades = db.createObjectStore(DB.STORES.ACTIVIDADES, {
          keyPath: "id",
          autoIncrement: true,
        });
        almacenActividades.createIndex(DB.INDEXES.FECHA, "fecha", {
          unique: false,
        });
      }
    };
    solicitud.onsuccess = (evento) => {
      instanciaDB = evento.target.result;
      console.log("Base de datos inicializada:");
      resolve(instanciaDB);
    };
    solicitud.onerror = (evento) => {
      console.error(
        "Error al inicializar la base de datos:",
        evento.target.error
      );
      reject(evento.target.error);
    };
  });
};

// Obtener la instancia de la base de datos
export const obtenerDB = async () => {
  if (!instanciaDB) {
    await inicializarDB();
  }
  return instanciaDB;
};

// Cerrar la conexion a la base de datos
export const cerrarDB = () => {
  if (instanciaDB) {
    instanciaDB.close();
    instanciaDB = null;
    console.log("Base de datos cerrada.");
  }
};

export default {
  inicializarDB,
  obtenerDB,
  cerrarDB,
};