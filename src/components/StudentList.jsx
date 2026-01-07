import React from 'react';

const StudentList = ({ users }) => {
  const students = users.filter(user => user.role === 'student');

  return (
    <div className="student-list">
      <h2>Список учеников</h2>
      <div className="student-cards">
        {students.map(student => (
          <div key={student.login} className="student-card">
            <h3>{student.name}</h3>
            <p>Логин: {student.login}</p>
            <p>Пол: {student.gender === 'male' ? 'Мужской' : 'Женский'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
