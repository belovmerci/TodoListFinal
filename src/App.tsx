import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';
import './App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deleted: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'deleted' | 'active'>('all');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      deleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const clearAll = () => {
    setTodos([]);
    localStorage.removeItem('todos');
  };
  
  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleDelete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, deleted: !todo.deleted } : todo
      )
    );
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed && !todo.deleted);
      case 'deleted':
        return todos.filter((todo) => todo.deleted);
      case 'active':
        return todos.filter((todo) => !todo.completed && !todo.deleted);
      default:
        return todos.filter((todo) => !todo.deleted);
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} clearAll={clearAll} />
      <FilterButtons setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} toggleDelete={toggleDelete} />
    </div>
  );
};

export default App;