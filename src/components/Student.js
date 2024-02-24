// Student.js
import React from 'react';

const Student = ({ id, name, age, onDelete, onEdit }) => {
  return (
    <tr className='students'>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button onClick={() => onEdit(id)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Student;
