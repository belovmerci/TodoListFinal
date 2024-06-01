// src/TodoItem.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

describe('TodoItem Component', () => {
  const todo = { id: 1, text: 'Task 1', completed: false, deleted: false };

  test('should render todo text', () => {
    const { getByText } = render(
      <TodoItem todo={todo} toggleComplete={jest.fn()} toggleDelete={jest.fn()} />
    );

    expect(getByText('Task 1')).toBeInTheDocument();
  });

  test('toggle complete when text clicked', () => {
    const toggleComplete = jest.fn();
    const { getByText } = render(
      <TodoItem todo={todo} toggleComplete={toggleComplete} toggleDelete={jest.fn()} />
    );

    fireEvent.click(getByText('Task 1'));
    expect(toggleComplete).toHaveBeenCalledWith(1);
  });

  test('toggle delete when button clicked', () => {
    const toggleDelete = jest.fn();
    const { getByText } = render(
      <TodoItem todo={todo} toggleComplete={jest.fn()} toggleDelete={toggleDelete} />
    );

    fireEvent.click(getByText('Удалить'));
    expect(toggleDelete).toHaveBeenCalledWith(1);
  });
});
