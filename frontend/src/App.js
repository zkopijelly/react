import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Fetch todos from the API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTodos();
  }, []);

  // Add a new todo
  const addTodo = async () => {
    if (newTodo.trim() === '') return;

    try {
      const response = await axios.post('http://localhost:5000/api/todos', { text: newTodo });
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (err) {
      console.log(err);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // Toggle completion status
  const toggleComplete = async (id, completed) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      
      <div className="input-container">
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo._id} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            <div>
              <button onClick={() => toggleComplete(todo._id, todo.completed)}>Complete</button>
              <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
