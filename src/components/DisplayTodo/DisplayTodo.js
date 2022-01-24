
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import TodoLists from '../TodoLists';

const DisplayTodo = () => {
  const [infoTodo, setInfoTodo] = useState([]);
  const [id, setId] = useState('');
  const [update, setUpdate] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/api/todo-mern')
    .then((res) => {
      setInfoTodo(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, 
  [update]
  );

  const editHandler = (e) => {
    setId(e.target.name);
    setModal(true);
  }

  const updateHandler = () => {
    setUpdate(!update);
  };

  const deleteHandler = (e) => {
    axios.delete(`http://localhost:3000/api/todo-mern/${e.target.name}`);
    
    setInfoTodo((data) => {
      return data.filter(todo => todo._id !== e.target.name);
    });
  };
  
  const closeHandler = () => {
    setId('');
    setModal(false);
  };

  return (
    <section className='container'>
      <Link to='/add-list' className='button-new'>
        <button className='todo-btn'>Add new todo</button>
      </Link>
      <section className='todo-data'>
        <h1></h1>
        <ul className='todo-list-block'>
          {infoTodo.map((todoInfo, index) => (
            <TodoLists key={index} todoInfos={todoInfo} editHandler={editHandler} deleteHandler={deleteHandler}/>
          ))}
        </ul>
      </section>
      {modal ? ( 
        <section className='update-container'>
          <div className='update-todo-data'>
            <p onClick={closeHandler} className='close'>
              &times;
            </p>
          </div>
        </section>
      ): (
        ''
      )}
    </section>
  );
};

export default DisplayTodo;