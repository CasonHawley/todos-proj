import React, { Component } from 'react'

class AddTodo extends Component {
   render() {
       const { className } = this.props;
       return (
            <div className={`${className} add-todo`}>
               <input></input>
               <button>add todo</button>
            </div>
       )
   }
}

export default AddTodo;