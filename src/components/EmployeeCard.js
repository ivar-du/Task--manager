// EmployeeCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
  return (
    <Link to={`/employee/${employee.id}`} className="employee-card">
      <div className="employee-card-name">{employee.name}</div>
      <div className="employee-card-department">{employee.department}</div>
    </Link>
  );
};

export default EmployeeCard;
