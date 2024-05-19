import React from 'react';

interface FilterButtonsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')}>Показать все</button>
      <button onClick={() => setFilter('completed')}>Показать завершённые</button>
      <button onClick={() => setFilter('deleted')}>Показать удалённые</button>
    </div>
  );
};

export default FilterButtons;
