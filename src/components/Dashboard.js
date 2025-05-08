import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('jobs');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button onClick={() => setActiveTab('jobs')}>Job Registered List</button>
        <button onClick={() => setActiveTab('companies')}>Companies Connect for Talent</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="content">
        {activeTab === 'jobs' && <JobList />}
        {activeTab === 'companies' && <CompanyList />}
      </div>
    </div>
  );
};

const JobList = () => (
  <div className="table-container">
    <h3>Job Registered Students List</h3>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Student Name</th>
          <th>Email ID</th>
          <th>Registered Job</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 20 }, (_, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>Student {index + 1}</td>
            <td>student{index + 1}@example.com</td>
            <td>{['Developer', 'Designer', 'Analyst', 'Manager'][index % 4]}</td>
            <td>{new Date(2024, 4, index + 1).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CompanyList = () => (
  <div className="table-container">
    <h3>Companies Connect for Talent</h3>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Company Name</th>
          <th>Email ID</th>
          <th>Talent Requirement</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 20 }, (_, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>Company {index + 1}</td>
            <td>contact{index + 1}@company.com</td>
            <td>{['React Dev', 'UI/UX', 'Data Scientist', 'HR Manager'][index % 4]}</td>
            <td>{new Date(2024, 3, index + 2).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Dashboard;
