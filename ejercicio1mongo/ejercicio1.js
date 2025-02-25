const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Miguel:sevilla01@cluster0.oeaie.mongodb.net/libreria?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log("Error de conexión:", err));

const libroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  año: { type: Number, required: true },
  editorial: { type: String, required: true },
});

const Libro = mongoose.model("Libro", libroSchema);

app.post("/libros", async (req, res) => {
  const libro = new Libro(req.body);
  const nuevoLibro = await libro.save();
  res.status(201).send(nuevoLibro);
});

app.put("/libros/:id", async (req, res) => {
  const { id } = req.params;
  const libroActualizado = await Libro.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(libroActualizado);
});

app.delete("/libros/:id", async (req, res) => {
  const { id } = req.params;
  const libroEliminado = await Libro.findByIdAndDelete(id);
  res.send(libroEliminado);
});

app.get("/libros", async (req, res) => {
    const libros = await Libro.find({});
    res.send(libros);
});

app.get("/libros/:id", async (req, res) => {
  const { id } = req.params;
  const libro = await Libro.findById(id);
  res.send(libro);
});

app.get("/libros/buscar/:fragment", async (req, res) => {
  const { fragment } = req.params;
  const libros = await Libro.find({
    titulo: { $regex: fragment, $options: "i" },
  });
  res.send(libros);
});

app.listen(4000, () => {
  console.log(`Servidor corriendo en http://localhost:4000`);
});
