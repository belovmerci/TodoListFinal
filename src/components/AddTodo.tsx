import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (text: string) => void;
  clearAll: () => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo, clearAll }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Добавить</button>
      <button onClick={clearAll}>Очистить все</button>
    </div>
  );
};

export default AddTodo;
