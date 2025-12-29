import { useState, useEffect } from 'react';

const Menu = ({ user, onLogout, adminMessage, setAdminMessage }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:3005/admin-message')
      .then(res => res.json())
      .then(data => setAdminMessage(data.message))
      .catch(err => console.error('Failed to fetch message:', err));
  }, [setAdminMessage]);

  const handleSubmit = () => {
    fetch('http://localhost:3005/admin-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: inputValue })
    })
      .then(res => res.json())
      .then(() => {
        setAdminMessage(inputValue);
        setInputValue('');
      })
      .catch(err => console.error('Failed to save message:', err));
  };

  return (
    <div className="menu-container">
      <h1>Меню</h1>
      <div className="admin-box">
        {user.role === 'Admin' && (
          <div className="admin-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Введите сообщение"
            />
            <button onClick={handleSubmit}>Отправить</button>
          </div>
        )}
        {adminMessage && <p>{adminMessage}</p>}
      </div>
      <button onClick={onLogout}>Выйти</button>
    </div>
  );
};

export default Menu;
