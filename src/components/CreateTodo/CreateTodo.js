
import {useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateTodo = () => {
  const [todoInfo, setTodoInfo] = useState({ title: '', description: '' });

  function handleChange(e) {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.post('http://localhost:3000/api/todo-mern', todoInfo)
    .then((res) => {
      setTodoInfo({title: '', description: ''});
      console.log(res.data.message);
    })
    .catch((err) => {
      console.log('Error não foi possível criar o todo');
      console.log(err.message);
    });
  }

  return ( 
    <section className='container'>
      <Link to='/'>
        <button type='button' className='todo-btn todo-btn-back'>
          button back
        </button>
      </Link>

      <section className='todo-data'>
        <form onSubmit={handleSubmit} className='form-container' noValidate>
          <label className='label' htmlFor='title'>
            Todo Title
          </label>
          <input type='text' name='title' value={todoInfo.title} 
            onChange={handleChange} className='input'/>
          <label className='label' htmlFor='description'>
            Describe is!
          </label>
          <input type='textarea' name='description' value={todoInfo.description}
            onChange={handleChange} className='input'/>
            
          <button type='submit' className='todo-btn'>
            create todo
          </button>
        </form>
      </section>
    </section>
  );
};
export default CreateTodo;