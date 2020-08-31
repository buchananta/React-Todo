// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        {this.props.todoList.map((elem) => {
          return (
            <Todo key={elem.id}
                  elem={elem}
                  toggleCompleted={this.props.toggleCompleted}
           />
          )
        })}
      </ul>
    )
  }
}

export default TodoList;