// src/__tests__/AddTodo.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react';
import AddTodo from '../components/AddTodo';

describe('AddTodo Component', () => {
  test('should add a todo when the Add button is clicked', () => {
    const addTodo = jest.fn();
    const clearAll = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <AddTodo addTodo={addTodo} clearAll={clearAll} />
    );

    const input = getByPlaceholderText('Введите задачу');
    const addButton = getByText('Добавить');

    act(() => {
      fireEvent.change(input, { target: { value: 'New Task' } });
      fireEvent.click(addButton);
    });

    expect(addTodo).toHaveBeenCalledWith('New Task');
  });

  test('should clear all todos when the Clear All button is clicked', () => {
    const addTodo = jest.fn();
    const clearAll = jest.fn();
    const { getByText } = render(
      <AddTodo addTodo={addTodo} clearAll={clearAll} />
    );

    const clearAllButton = getByText('Очистить все');

    act(() => {
      fireEvent.click(clearAllButton);
    });

    expect(clearAll).toHaveBeenCalled();
  });
});
