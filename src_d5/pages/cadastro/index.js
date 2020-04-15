import React, { useState, useEffect } from 'react';
import TableUser from '../../components/table';
import FormUser from '../../components/form';
import '../../App.css';

function Cadastro (props) {

  const [users, setUsers] = useState([]);

  const handleFormSubmit = (values) => setUsers([...users,{ firstname: values.firstname, lastname: values.lastname }]);

  useEffect(() => {
    alert('montando/att componente');

    let carga = [
      {firstname: 'Ivan', lastname: 'Silva'},
      {firstname: 'João', lastname: 'Victor'},
      {firstname: 'Vinicius', lastname: 'teste'},
    ]

    setUsers(carga);
  }, []);

  useEffect(() => {
    return () => {
      alert('Desmontando componente');
    }
  }, []);
  
  return (
    <div className="App">
      <FormUser handleFormSubmit={ handleFormSubmit } />

      <TableUser items={users} />
    </div>
  );

}

export default Cadastro;
