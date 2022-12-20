import React, { useState } from 'react';

export const FilterTracks = ({ label, filter, onFilterItemClick, options }) => {
  const [visible, setVisible] = useState(false);

  const handleFilterItemClick = (name) => {
    onFilterItemClick(name);
    setVisible(false);
  }

  const handleFilterClick = () => {
    setVisible(!visible);
  }

  return (
    <div className="dropdown">
      <button
        // если какой-то фильтр в этой категории выбран, то подсвечиваем кнопку активной
        className={`centerBlock__filter_btn ${filter.length ? 'active' : ''}`}
        onClick={handleFilterClick}
      >
        {label} {!!filter.length && <span>{filter.length}</span>}
      </button>
      {
        // если состояние видимости меню включено, то отрисовываем фильтр
        visible && (
          <ul className="list">
            {options.map((item) => (
              <li
                // выбранный элемент из списка подсвечиваем активным
                className={`filter-list-item ${filter.includes(item.name) ? 'active' : ''}`}
                key={item.id}
                onClick={() => handleFilterItemClick(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}