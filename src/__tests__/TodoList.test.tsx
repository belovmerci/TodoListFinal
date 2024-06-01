// src/__tests__/TodoList.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import TodoList from '../components/TodoList';
import React, { useState, useEffect } from 'react';

const mockTodos = [
  { id: 1, text: 'Task 1', completed: false, deleted: false },
  { id: 2, text: 'Task 2', completed: true, deleted: false },
  { id: 3, text: 'Task 3', completed: false, deleted: true }
];

describe('TodoList Component', () => {
  test('should render todos', () => {
    const { getByText } = render(
      <TodoList todos={mockTodos} toggleComplete={jest.fn()} toggleDelete={jest.fn()} />
    );

    expect(getByText('Task 1')).toBeInTheDocument();
    expect(getByText('Task 2')).toBeInTheDocument();
    expect(getByText('Task 3')).toBeInTheDocument();
  });

  test('should toggle complete status when a todo is clicked', () => {
    const toggleComplete = jest.fn();
    const { getByText } = render(
      <TodoList todos={mockTodos} toggleComplete={toggleComplete} toggleDelete={jest.fn()} />
    );

    act(() => {
      fireEvent.click(getByText('Task 1'));
    });

    expect(toggleComplete).toHaveBeenCalledWith(1);

    act(() => {
      fireEvent.click(getByText('Task 2'));
    });

    expect(toggleComplete).toHaveBeenCalledWith(2);
  });

  test('should toggle delete status when the delete button is clicked', () => {
    const toggleDelete = jest.fn();
    const { getByText } = render(
      <TodoList todos={mockTodos} toggleComplete={jest.fn()} toggleDelete={toggleDelete} />
    );

    const deleteButton = screen.getAllByText('Удалить')[0];
    act(() => {
      fireEvent.click(deleteButton);
    });

    expect(toggleDelete).toHaveBeenCalledWith(1);
  });
});
