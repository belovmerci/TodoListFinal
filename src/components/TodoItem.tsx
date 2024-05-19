import React from 'react';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean; deleted: boolean };
  toggleComplete: (id: number) => void;
  toggleDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, toggleDelete }) => {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : 'none', opacity: todo.deleted ? 0.5 : 1 }}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <button onClick={() => toggleDelete(todo.id)}>Удалить</button>
    </div>
  );
};

export default TodoItem;
