
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TodoLists from '../TodoLists';

const DisplayTodo = () => {
  const [infoTodo, setInfoTodo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/todo-mern')
    .then((res) => {
      console.log(res.data);
      setInfoTodo(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const deleteHandler = (e) => {
    axios.delete(`http://localhost:3000/api/todo-mern/${e.target.name}`);
    setInfoTodo((data) => {
      return data.filter(todo => todo._id !== e.target.name);
    });
  };
  return (
    <section className='todo-container'>
      <link to='/add-todo' className='todo-btn-new'>
        <button className='todo-btn'>Add new todo</button>
      </link>
      <section className='todo-data'>
        <h1></h1>
        <ul className='todo-list-block'>
          {infoTodo.map((data) => (
            <TodoCard data={data} deleteHandler={deleteHandler}/>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default DisplayTodo;