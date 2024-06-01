import React from 'react';
import './TodoItem.css';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean; deleted: boolean };
  toggleComplete: (id: number) => void;
  toggleDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, toggleDelete }) => {
  const renderText = (text: string) => {
    if (text.length > 70) {
      return text.match(/.{1,70}/g)?.join('\n');
    }
    return text;
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.deleted ? 'deleted' : ''}`}>
      <span className="text" onClick={() => toggleComplete(todo.id)}>
        {renderText(todo.text)}
      </span>
      <button onClick={() => toggleDelete(todo.id)}>Удалить</button>
    </div>
  );
};

export default TodoItem;
