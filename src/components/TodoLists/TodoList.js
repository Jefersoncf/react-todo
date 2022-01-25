

import React from 'react';

const TodoLists = ({ todoInfos, editHandler, deleteHandler }) => {
  const { _id, title, description } = todoInfos;

  return (
    <li key={_id}>
      <div className='title-description'>
        <h2>{title}</h2>
        <h1></h1>
        <p>{description}</p>
      </div>
      <h1></h1>
      <div className='todo-btn-container'>
        <button name={_id} className='todo-btn' onClick={editHandler}>
          button
        </button>
        <button name={_id} className='todo-btn' onClick={deleteHandler}>
          button
        </button>
      </div>
    </li>
  );
};
export default TodoLists;