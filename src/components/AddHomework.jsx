import React, { useState } from 'react';

const AddHomework = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim() && date.trim()) {
      onAdd({ title, description, date });
      setTitle('');
      setDescription('');
      setDate('');
      setMessage('Домашнее задание добавлено!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="homework-form">
      <h2>Добавить домашнее задание</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название домашнего задания"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание домашнего задания"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Добавить</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default AddHomework;
