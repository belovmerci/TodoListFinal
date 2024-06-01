import React from 'react';
import './FilterButtons.css';

interface FilterButtonsProps {
  setFilter: (filter: 'all' | 'completed' | 'deleted' | 'active') => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')}>Показать все</button>
      <button onClick={() => setFilter('active')}>Показать активные</button>
      <button onClick={() => setFilter('completed')}>Показать завершённые</button>
      <button onClick={() => setFilter('deleted')}>Показать удалённые</button>
    
    </div>
  );
};

export default FilterButtons;