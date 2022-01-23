

import React from 'react';

const TodoList = ({ todoInfos, deleteHandler }) => {
  const { _id, title, description } = todoInfos;
  return (
    <li key={_id}>
      <div className='title-description'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className='button-container'>
        <button name={_id} className='button'>
          button
        </button>
        <button name={_id} className='button' onClick={deleteHandler}>
          button
        </button>
      </div>
    </li>
  );
};