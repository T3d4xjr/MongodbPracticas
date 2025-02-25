const mongoose = require('mongoose');

// Conectar a MongoDB
mongoose.connect('mongodb+srv://Miguel:sevilla01@cluster0.oeaie.mongodb.net/tienda?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error de conexión:', err));

// Definir un esquema
const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
});

// Crear un modelo a partir del esquema
const Producto = mongoose.model('Producto', productoSchema);

// Crear un nuevo producto
const nuevoProducto = new Producto({
  nombre: 'Camiseta',
  precio: 20,
  stock: 50
});

// Guardar el producto en la base de datos
nuevoProducto.save()
  .then(() => console.log('Producto guardado en la base de datos'))
  .catch((err) => console.log('Error al guardar el producto:', err));

// Consultar todos los productos
Producto.find()
  .then((productos) => console.log(productos))
  .catch((err) => console.log('Error al consultar productos:', err));

  module.exports =Producto;