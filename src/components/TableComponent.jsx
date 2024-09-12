import React from 'react';

const TableComponent = () => {
  const data = [
    { id: 1, name: 'Model A', accuracy: '85%', status: 'Running' },
    { id: 2, name: 'Model B', accuracy: '90%', status: 'Completed' },
    { id: 3, name: 'Model C', accuracy: '78%', status: 'Failed' },
  ];

  return (
    <div>
      <h3>Model Performance</h3>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.accuracy}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
