import React from 'react';
import ChartComponent from '../components/ChartComponent';
import TableComponent from '../components/TableComponent';

const Analytics = () => {
    console.log('Rendering Analytics Page');
    return (
    <div>
      <h2>Analytics Overview</h2>
      <ChartComponent />
      <TableComponent />
    </div>
  );
};

export default Analytics;
