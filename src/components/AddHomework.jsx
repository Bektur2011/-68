import React, { useState } from 'react';

const AddHomework = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim() && date.trim()) {
      onAdd({ title, description, date });
      setTitle('');
      setDescription('');
      setDate('');
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
    </div>
  );
};

export default AddHomework;
