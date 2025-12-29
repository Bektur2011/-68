import { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [loginInput, setLoginInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(loginInput);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Вход в систему</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введите ваш логин"
            value={loginInput}
            onChange={(e) => setLoginInput(e.target.value)}
            required
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
