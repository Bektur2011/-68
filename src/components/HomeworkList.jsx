import React from 'react';

const HomeworkList = ({ homeworks, user }) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:3005/homeworks/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        // Optionally update local state if needed, but since App manages state, perhaps not
      })
      .catch(err => console.error('Failed to delete homework:', err));
  };

  return (
    <div className="homework-list">
      <h2>Домашние задания</h2>
      {homeworks.length === 0 ? (
        <p>Нет домашних заданий</p>
      ) : (
        <div className="homework-cards">
          {homeworks.map((homework, index) => (
            <div key={index} className="homework-card">
              <h3>{homework.title}</h3>
              <p>{homework.description}</p>
              <p>Дата: {homework.date}</p>
              {user && user.role === 'admin' && (
                <button onClick={() => handleDelete(homework.id)}>Удалить</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeworkList;
