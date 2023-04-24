// EmployeeList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = () => {
  const employees = [
    { id: 1, name: 'Alice Smith' },
    { id: 2, name: 'Bob Johnson' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'David Williams' },
    { id: 5, name: 'Eva Davis' },
  ];

  return (
    <div className="employee-list">
      <h2>Ansattliste</h2>
      {employees.map((employee) => (
        <Link key={employee.id} to={`/employee/${employee.id}`} className="employee-item">
          {employee.name}
        </Link>
      ))}
    </div>
  );
};

export default EmployeeList;
