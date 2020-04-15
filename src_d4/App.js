/*
Terceiro exercício 
 - replicar terceiro exercicio usando React Hooks
*/

import React, { useState } from 'react';
import './App.css';
import TableUser from './components/table';
import FormUser from './components/form';

function App(props) {

  const [users, setUsers] = useState([]);

  const handleFormSubmit = (values) => setUsers([...users,{ firstname: values.firstname, lastname: values.lastname }]);

  return (
    <div className="App">
      <FormUser handleFormSubmit={ handleFormSubmit } />

      <TableUser items={users} />
    </div>
  );

}

export default App;
