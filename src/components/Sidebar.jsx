import React from 'react';
import './Sidebar.css';

const Sidebar = ({ currentView, onMenuClick, onHomeworkClick }) => {
  return (
    <div className="sidebar">
      <button
        className={`sidebar-button ${currentView === 'menu' ? 'active' : ''}`}
        onClick={onMenuClick}
        title="Меню"
      >
        📋
      </button>
      <button
        className={`sidebar-button ${currentView === 'homework' ? 'active' : ''}`}
        onClick={onHomeworkClick}
        title="Домашние задания"
      >
        📖
      </button>
    </div>
  );
};

export default Sidebar;
