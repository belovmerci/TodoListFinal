import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deleted: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false, deleted: false }]);
  };

  const clearAll = () => {
    setTodos([]);
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const toggleDelete = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, deleted: !todo.deleted } : todo));
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} clearAll={clearAll} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList todos={todos} toggleComplete={toggleComplete} toggleDelete={toggleDelete} filter={filter} />
    </div>
  );
};

export default App;
