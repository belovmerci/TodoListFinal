import React, { useState } from 'react';
import './AddTodo.css';

interface AddTodoProps {
  addTodo: (text: string) => void;
  clearAll: () => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo, clearAll }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={handleAdd}>Добавить</button>
      <button onClick={clearAll}>Очистить все</button>
    </div>
  );
};

export default AddTodo;
