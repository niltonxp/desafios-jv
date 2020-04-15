/*
Segundo exercício 
 - Criar um cadastro de usuários
 - Nome e sobrenome e um botão adicionar
Abaixo dos campos uma tabela onde mostrará usuários cadastrados1
*/

import React, { Component } from 'react';
import './App.css';
import Table from './components/table';
import FormUser from './components/form';

class App extends Component {
  constructor() {
    super();  
   
    this.state = {
      firstname: '',
      lastname: '',
      users: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let users = [...this.state.users];

    users.push({
      firstname: this.state.firstname,
      lastname: this.state.lastname
    });

    this.setState({
      users,
      firstname: '',
      lastname: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };
 
  render() {
    return (
      <div className="App">
        <FormUser 
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newFirstname={this.state.firstname}
          newLastname={this.state.lastname} />

        <Table items={this.state.users} />
      </div>
    );
  }
}

export default App;
