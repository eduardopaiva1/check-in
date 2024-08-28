'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Todo {
  text: string;
  _id: string; // Usado para identificação única
  completed: boolean;
}

export const ToDoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Fetch todos from server on component mount
  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  // Add a new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = { text: inputValue, completed: false };

      fetch('http://localhost:5000/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      })
        .then((response) => response.json())
        .then((savedTodo) => {
          setTodos((prevTodos) => [...prevTodos, savedTodo]);
          setInputValue('');
        })
        .catch((error) => console.error('Error saving todo:', error));
    }
  };

  // Remove a todo by id
  const removeTodo = async (id: string) => {
    try {
      if (id) {
        await axios.delete(`http://localhost:5000/api/todos/${id}`);
        setTodos(todos.filter(todo => todo._id !== id));
      } else {
        console.error('ID do Todo não está definido');
      }
    } catch (error) {
      console.error('Erro ao remover o todo:', error);
    }
  };

  // Toggle completion status of a todo
  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">ToDo List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 p-2 border border-gray-300 rounded-l"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo._id}
            className={`flex justify-between items-center border p-2 bg-white shadow-sm ${todo.completed ? 'line-through' : ''}`}
            style={{ maxWidth: '50%' }}
          >
            <span
              className="cursor-pointer"
              onClick={() => toggleComplete(todo._id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo._id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
