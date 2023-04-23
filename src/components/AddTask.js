// GeneralTaskList.js
import React from 'react';
import './AddTask';

const AddTask = () => {
  const tasks = [
    { id: 1, name: 'Complete paperwork' },
    { id: 2, name: 'Attend orientation' },
    { id: 3, name: 'Setup work email' },
    { id: 4, name: 'Meet with manager' },
    { id: 5, name: 'Get office tour' },
    { id: 6, name: 'Review company policies' },
    { id: 7, name: 'Setup computer and software' },
    { id: 8, name: 'Receive company swag' },
    { id: 9, name: 'Introduction to team members' },
    { id: 10, name: 'Review goals and expectations' },
  ];

  return (
    <div className="general-task-list">
      <h2>General Oppgaveliste</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;
