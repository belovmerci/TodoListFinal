import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deleted: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  toggleDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, toggleDelete }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          toggleDelete={toggleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
