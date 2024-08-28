const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/checkins', {
  }).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
  
  // Modelo do Mongoose
  const checkInSchema = new mongoose.Schema({
    activity: String,
    date: String,
    timeSpent: String,
  });

  const todoSchema = new mongoose.Schema({
    text: String,
  });
  
  const Todo = mongoose.model('Todo', todoSchema);
  
  const CheckIn = mongoose.model('CheckIn', checkInSchema);

// Rota para obter todos os check-ins
app.get('/check-ins', async (req, res) => {
    const checkIns = await CheckIn.find();
    res.json(checkIns);
  });
  
  app.post('/check-ins', async (req, res) => {
    const newCheckIn = new CheckIn(req.body);
    await newCheckIn.save();
    res.json(newCheckIn);
  });

  app.post('/api/todos', async (req, res) => {
    const todo = new Todo({
      text: req.body.text,
    });
    await todo.save();
    res.status(201).send(todo);
  });
  
  app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find();
    res.status(200).send(todos);
  });

  app.delete('/api/todos/:id', async (req, res) => {
    try {
      const todoId = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(todoId)) {
        return res.status(400).send({ message: 'ID inválido' });
      }
  
      const result = await Todo.findByIdAndDelete(todoId);
      if (result) {
        res.status(200).send({ message: 'Todo removido com sucesso' });
      } else {
        res.status(404).send({ message: 'Todo não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });