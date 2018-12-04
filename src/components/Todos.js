import React, { Component } from 'react'

class Todos extends Component {
   render() {
       const { className } = this.props;
       return (
            <div className={`${className} todos`}>
               {/* input */}
               {/* add button */}
            </div>
       )
   }
}

export default Todos;