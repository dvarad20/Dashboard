import React from 'react';
import { useSelector } from 'react-redux';
import WidgetForm from './WidgetForm';
// import Graph from './Graph';
import PieChartComponent from './PieChartComponent';

const WidgetGraphContainer = () => {
  const categories = useSelector(state => state.widgets.categories);

  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <WidgetForm categoryId={category.id} />
        </div>
      ))}
      {/* <Graph data={{ categories }} /> */}
      <PieChartComponent />
    </div>
  );
};

export default WidgetGraphContainer;
