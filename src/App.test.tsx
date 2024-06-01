import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('adds and filters todos correctly', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('Введите задачу');
  const addButton = screen.getByText('Добавить');
  const showDeletedButton = screen.getByText('Показать удалённые');
  const showActiveButton = screen.getByText('Показать активные');

  // Add a task
  act(() => {
    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(addButton);
  });

  // Add a second task
  act(() => {
    fireEvent.change(input, { target: { value: 'Second Task' } });
    fireEvent.click(addButton);
  });

  // Mark first task as deleted
  const deleteButton = screen.getAllByText('Удалить')[0];
  act(() => {
    fireEvent.click(deleteButton);
  });

  // Show active tasks
  act(() => {
    fireEvent.click(showActiveButton);
    expect(screen.getByText('Second Task')).toBeInTheDocument();
    expect(screen.queryByText('Test Task')).toBeNull();
  });
});