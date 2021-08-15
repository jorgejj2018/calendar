import React, { useEffect, useState } from 'react';
import {createNewEvent} from '../actions/calendarActions'
import { useDispatch } from 'react-redux'




const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const reset = (newStateForm = initialState) => {
    setValues(newStateForm);
  };
  const handleInputChange = ({ target }) => {
    if (target.type === 'checkbox') {
      setValues({
        ...values,
        [target.name]: target.checked,
      });
    } else {
      setValues({
        ...values,
        [target.name]: target.value,
      });
    }
  };
  return [values, handleInputChange, reset];
};

const CreateClassTopic = () => {
  

  const dispatch = useDispatch()

  const [formValues, handleInputChange, reset] = useForm({
    title: '',
    start: '',
    end: '',
    description:''
  });

  const { title, start,end,description } = formValues;

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(formValues);
    dispatch(createNewEvent(title, start,end,description))
  };


  return (
    <div>
      <h1>Crear Eventos Por Horas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='tema de la clase del dia'
          name='title'
          value={title}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='breve Descripcion'
          name='description'
          value={description}
          onChange={handleInputChange}
          required
        />
        <input type='datetime-local' name='start' onChange={handleInputChange} value={start} />
        <input type='datetime-local' name='end' onChange={handleInputChange} value={end} />
        <button type='submit'>Añadir Nuevo Sprint</button>
      </form>
    </div>
  );
};
export default CreateClassTopic;
