import { useState } from 'react';
import './styles.css';
import Login from './components/Login';
import Menu from './components/Menu';
import AddHomework from './components/AddHomework';
import HomeworkList from './components/HomeworkList';
import Sidebar from './components/Sidebar';
import users from './users';

function App() {
  const [user, setUser] = useState(null);
  const [homeworks, setHomeworks] = useState([]);
  const [currentView, setCurrentView] = useState('menu');
  const [showMessage, setShowMessage] = useState(false);
  const [adminMessage, setAdminMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogin = (loginInput) => {
    const foundUser = users.find(u => u.login === loginInput);
    if (foundUser) {
      setUser(foundUser);
      setShowMessage(true);
    } else {
      alert('Неверный логин');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const addHomework = (homework) => {
    const newHomework = { ...homework, id: Date.now() };
    fetch('http://localhost:3005/homeworks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHomework),
    })
      .then(res => res.json())
      .then(() => {
        setHomeworks([...homeworks, newHomework]);
      })
      .catch(err => console.error('Failed to add homework:', err));
  };

  const deleteHomework = (id) => {
    fetch(`http://localhost:3005/homeworks/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        setHomeworks(homeworks.filter(h => h.id !== id));
      })
      .catch(err => console.error('Failed to delete homework:', err));
  };

  const switchToMenu = () => {
    if (currentView === 'homework') {
      setCurrentView('menu');
    }
  };

  const switchToHomework = () => {
    setCurrentView('homework');
  };

  const switchToStudents = () => {
    setCurrentView('students');
  };

  const switchToSettings = () => {
    setCurrentView('settings');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Sidebar currentView={currentView} onMenuClick={switchToMenu} onHomeworkClick={switchToHomework} />
      <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => { setCurrentView('menu'); setMobileMenuOpen(false); }}>Меню</button>
          <button onClick={() => { setCurrentView('homework'); setMobileMenuOpen(false); }}>Домашние задания</button>
        </div>
      )}
      <div className="main-content">
        {currentView === 'menu' && (
          <Menu user={user} onLogout={handleLogout} adminMessage={adminMessage} setAdminMessage={setAdminMessage} />
        )}
        {currentView === 'homework' && (
          <>
            <AddHomework onAdd={addHomework} />
            <HomeworkList homeworks={homeworks} user={user} onDelete={deleteHomework} />
          </>
        )}
        {currentView === 'students' && (
          <StudentList />
        )}
        {currentView === 'settings' && (
          <Settings />
        )}
      </div>
      {showMessage && (
        <div className="popup-overlay">
          <div className="popup-message">
            <h2>Добро пожаловать, {user.role === 'Admin' ? `Админ ${user.name}` : `Ученик${user.gender === 'female' ? 'ца' : ''} ${user.name}`}! 🎄</h2>
            <button onClick={() => setShowMessage(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
