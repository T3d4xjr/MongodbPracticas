const mongoose = require('mongoose');

const trabajadorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true},
  telefono: { type: String, required: true}
});

module.exports = mongoose.model('Trabajador', trabajadorSchema);