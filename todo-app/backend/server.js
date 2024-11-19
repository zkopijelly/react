// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection string directly (replace with your MongoDB Atlas connection string)
const MONGO_URI = "mongodb+srv://jenavista:QRIFjTfHaqnC9j6b@cluster0.yrxv3.mongodb.net/"; // Example: "mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase"

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// Connect to MongoDB (no need for useNewUrlParser and useUnifiedTopology anymore)
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// To-do model
const todoSchema = new mongoose.Schema({
    text: String,
    completed: { type: Boolean, default: false },
});

const Todo = mongoose.model('Todo', todoSchema);

// Routes

// Get all to-dos
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new to-do
app.post('/api/todos', async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a to-do
app.delete('/api/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a to-do (mark as completed)
app.patch('/api/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            { completed: req.body.completed },
            { new: true }
        );
        res.json(todo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));