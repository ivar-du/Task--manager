import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import EmployeeList from './components/EmployeeList';
import EmployeeTasks from './components/EmployeeTasks';
import AddTask from './components/AddTask';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employee/:employeeId" element={<EmployeeTasks />} />
            <Route path="/employee/:id/:name" element={<EmployeeTasks />} />
            <Route path="/add-task" element={<AddTask />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
