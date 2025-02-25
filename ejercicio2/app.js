const express = require('express');
const conectarDB = require('./config/db');
const trabajadorRoutes = require('./routes/trabajador.routes');
const tareaRoutes = require('./routes/tarea.routes');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

conectarDB();

// Middleware para JSON
app.use(express.json());

app.use('/trabajadores', trabajadorRoutes);
app.use('/trabajador/tareas', tareaRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});