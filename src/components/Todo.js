import React from 'react';


class Todo extends React.Component {
  render() {
    return (
      <p className={this.props.elem.completed ? 'strike' : '' }
         onClick={() => this.props.toggleCompleted(this.props.elem)}
      >
        {this.props.elem.task}
        </p>
    )
  }
}

export default Todo;
