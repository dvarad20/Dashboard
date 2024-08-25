import React from 'react';
import Widget from './Widget';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/widgetsSlice';

const Category = ({ category }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidget({ categoryId: category.id, widgetId }));
  };

  return (
    <div>
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} onRemove={() => handleRemoveWidget(widget.id)} />
      ))}
    </div>
  );
};

export default Category;
