/*Primeiro exercício
1.Descricão
Criar 2 inputs separados
Nome e sobrenome
2. Exercícios
2.1 criar um botão e ao clicar no botão deve mostrar um label com nome e sobrenome do usuário
2.2 deixar reativo, a medida que usuário escreve o nome e sobrenome já é mostrado*/ 

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {  
    var objectState = this.state;
    objectState[event.target.name] = event.target.value;
    
    this.setState(objectState);
 }

  render() {
    return (
      <div className="App">
        <form>
        <div class="App-header">
          <label>First name: </label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
        
          <label>Last name: </label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
        </div> 

          <span>{this.state.firstName} {this.state.lastName}</span>
        </form>
      </div>
    );
  }
}

export default App;