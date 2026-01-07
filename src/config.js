// API Configuration
// В production (на GitHub Pages) используется URL бэкенда на Render.com
// В development - локальный сервер

const isDevelopment = import.meta.env.MODE === 'development';

export const API_URL = isDevelopment 
  ? 'http://localhost:3005'
  : import.meta.env.VITE_API_URL || 'https://your-backend-app.onrender.com';

export default API_URL;