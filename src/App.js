import React, { Component } from 'react'
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
import './App.css';

class App extends Component {
  state = {
    items : [
      {id:1 , name: 'Amar', age:22},
      {id:2 , name: 'Ahmed', age:23},
      {id:3 , name: 'Cheikh', age:24}
    ]
  }


  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items})
    
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
    
  }

  render() { 
    return(
      <div className='App container'>
       <h1 className='text-center'>Todo List </h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem  addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;