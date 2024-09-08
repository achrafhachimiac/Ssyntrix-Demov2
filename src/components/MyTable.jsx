import React from 'react';

class StatusTable extends React.Component {
  render() {
    // Sample data of statuses
    const statuses = [
      { id: 1, name: 'Pending' },
      { id: 2, name: 'In Progress' },
      { id: 3, name: 'Completed' },
      { id: 4, name: 'Cancelled' },
      // Add more statuses as needed
    ];

    // Map through the statuses to create table rows
    const statusRows = statuses.map(status => (
      <tr key={status.id}>
        <td>{status.id}</td>
        <td>{status.name}</td>
      </tr>
    ));

    // Return the table
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {statusRows}
        </tbody>
      </table>
    );
  }
}

export default StatusTable;
