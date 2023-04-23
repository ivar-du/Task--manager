// EmployeeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';
import EmployeeTasks from './EmployeeTasks';

const EmployeeDetails = () => {
  const { id } = useParams();
  const employee = {
    id: Number(id),
    name: 'Alice Smith',
  };
  const tasks = [
    { id: 1, name: 'Task 1', urgency: 'low' },
    { id: 2, name: 'Task 2', urgency: 'medium' },
    { id: 3, name: 'Task 3', urgency: 'high' },
  ];

  return (
    <div>
      <EmployeeCard employee={employee} />
      <EmployeeTasks tasks={tasks} />
    </div>
  );
};

export default EmployeeDetails;
