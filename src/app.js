// Importar el módulo express para crear el servidor 
import express from "express";
// Importar el enrutador que contiene las rutas de la aplicación
import router from "./routes/index.js";

// Crear una instancia de la aplicación Express
const app = express();

// Middleware para parsear las solicitudes como JSON
app.use(express.json());
// Middleware para parsear las solicitudes con URL codificada
app.use(express.urlencoded({ extended: true }));

// Middleware para manejar las solicitudes que coinciden con la ruta "/api" utilizando el router
app.use("/api", router);

// Configurar el servidor para escuchar en el puerto 8080 y mostrar un mensaje cuando esté listo
app.listen(8080, () => {
  console.log("Escuchando el servidor en el puerto 8080");
});