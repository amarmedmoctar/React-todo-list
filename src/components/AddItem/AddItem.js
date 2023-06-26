import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {
  state = {
    name: '',
    age: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value === '') {
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({
        name: '',
        age: '',
      });
    }
  };

  render() {
    return (
      <div className="AddItem">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name..."
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Enter Age..."
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
            className="input-field"
          />
          <input type="submit" value="Add" className="add-button" />
        </form>
      </div>
    );
  }
}

export default AddItem;
