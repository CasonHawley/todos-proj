import React, { Component } from 'react';
import AddTodo from './addTodo';
import Todos from './Todos';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <h1 className='layout__title'>Todo app</h1>
        <AddTodo className='layout__add-todo'/>
        <Todos/>
      </div>
    );
  }
}

export default Layout;
