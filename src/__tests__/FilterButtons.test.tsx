// src/FilterButtons.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterButtons from '../components/FilterButtons';

describe('FilterButtons Component', () => {
  test('should set the filter when a filter button is clicked', () => {
    const setFilter = jest.fn();
    const { getByText } = render(<FilterButtons setFilter={setFilter} />);

    fireEvent.click(getByText('Показать все'));
    expect(setFilter).toHaveBeenCalledWith('all');

    fireEvent.click(getByText('Показать завершённые'));
    expect(setFilter).toHaveBeenCalledWith('completed');

    fireEvent.click(getByText('Показать удалённые'));
    expect(setFilter).toHaveBeenCalledWith('deleted');

    fireEvent.click(getByText('Показать активные'));
    expect(setFilter).toHaveBeenCalledWith('active');
  });
});
