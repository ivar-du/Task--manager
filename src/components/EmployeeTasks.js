import React from 'react';
import { useParams } from 'react-router-dom';
import './EmployeeTasks.css';

const EmployeeTasks = () => {
  const { name } = useParams();
  const tasks = [
    { id: 1, name: 'Task 1', urgency: 'low' },
    { id: 2, name: 'Task 2', urgency: 'medium' },
    { id: 3, name: 'Task 3', urgency: 'high' },
  ];

  return (
    <div className="employee-tasks">
      <h1>{name}</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <div className="task-name">{task.name}</div>
            <div className={`task-urgency ${task.urgency}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTasks;
