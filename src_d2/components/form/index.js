import React from 'react';
import './styles.css';

class Form extends React.Component {
  render() {
    return (
      <div className="content">
        <h3>Insert users</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="firstname">
          Firstname:
          <input id="firstname" value={this.props.newFirstname} 
            type="text" name="firstname"
            onChange={this.props.handleInputChange} />
          </label>
          <label htmlFor="lastname">
          Lastname:
          <input id="lastname" value={this.props.newLastname} 
            type="text" name="lastname"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Form;