// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import { useSelector } from 'react-redux';

// const PieChartComponent = () => {
//   const categories = useSelector(state => state.widgets.categories);

//   // Prepare data for the pie chart
//   const data = categories.map(category => ({
//     name: category.name,
//     value: category.widgets.length
//   }));

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347'];

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         data={data}
//         cx={200}
//         cy={200}
//         innerRadius={60}
//         outerRadius={120}
//         fill="#8884d8"
//         dataKey="value"
//         label
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//       <Tooltip />
//       <Legend />
//     </PieChart>
//   );
// };

// export default PieChartComponent;


import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';

const PieChartComponent = () => {
  const categories = useSelector(state => state.widgets.categories);

  // Prepare data for the existing pie chart
  const data = categories.map(category => ({
    name: category.name,
    value: category.widgets.length
  }));

  // Dummy data for "Cloud Account Risk Assessment" pie chart
  const cloudData = [
    { name: 'Failed', value: 1689 },
    { name: 'Warning', value: 681 },
    { name: 'Not Available', value: 36 },
    { name: 'Passed', value: 7253 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347'];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* Existing Pie Chart */}
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      {/* New "Cloud Account Risk Assessment" Pie Chart */}
      <PieChart width={400} height={400}>
        <Pie
          data={cloudData}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {cloudData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
