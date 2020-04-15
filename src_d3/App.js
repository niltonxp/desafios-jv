/*
Replicar a atividade 2 utilizando a biblioteca Ant Design
*/

import React, { Component } from 'react';
import './App.css';
import TableUser from './components/table';
import FormUser from './components/form';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      users: [],
    } 
  };

  handleFormSubmit = (values) => {

    let users = [...this.state.users];

    users.push({
      firstname: values.firstname,
      lastname: values.lastname
    });

    this.setState({
      users,
    });

  };

  render() {
    return (
      <div className="App">
        <FormUser handleFormSubmit={this.handleFormSubmit} />

        <TableUser items={this.state.users} />
      </div>
    );
  }
}

export default App;