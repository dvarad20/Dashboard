import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/widgetsSlice';

const WidgetForm = ({ categoryId }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWidget({ categoryId, name, text }));
    setName('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Widget Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default WidgetForm;
