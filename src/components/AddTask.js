// AddTask.js
import React from 'react';
import './AddTask.css';


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
      <button className="add-task-button">Legg til oppgave</button>
      <button className="remove-task-button">Fjern oppgave</button>
      <table>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddTask;
