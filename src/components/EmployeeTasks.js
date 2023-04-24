import React from 'react';
import { useParams } from 'react-router-dom';
import './EmployeeTasks.css';

const EmployeeTasks = () => {
  const { name } = useParams();
  const tasks = [
    { id: 1, name: 'Complete paperwork', urgency: 'high' },
    { id: 2, name: 'Attend orientation', urgency: 'high' },
    { id: 3, name: 'Setup work email', urgency: 'high' },
    { id: 4, name: 'Meet with manager', urgency: 'high' },
    { id: 5, name: 'Get office tour', urgency: 'high' },
    { id: 6, name: 'Review company policies', urgency: 'medium' },
    { id: 7, name: 'Setup computer and software', urgency: 'medium' },
    { id: 8, name: 'Receive company swag', urgency: 'medium' },
    { id: 9, name: 'Introduction to team members', urgency: 'low' },
    { id: 10, name: 'Review goals and expectations', urgency: 'low' },
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
