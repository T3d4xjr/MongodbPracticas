const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true, trim: true },
  descripcion: { type: String, required: true, trim: true },
  estado: { type: String, enum: ['Pendiente', 'Completada'], default: 'Pendiente' },
  trabajador: { type: mongoose.Schema.Types.ObjectId, ref: 'Trabajador', required: true }
});

module.exports = mongoose.model('Tarea', tareaSchema);
