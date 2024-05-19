import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean; deleted: boolean }[];
  toggleComplete: (id: number) => void;
  toggleDelete: (id: number) => void;
  filter: string;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, toggleDelete, filter }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed && !todo.deleted;
    if (filter === 'deleted') return todo.deleted;
    return !todo.deleted;
  });

  return (
    <div>
      {filteredTodos.map(todo => (
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
