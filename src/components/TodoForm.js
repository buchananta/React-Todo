import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'todo': '',
      'search': '',
    }
  }
  handleChange(e) {
    const {value} = e.target;
    this.setState({...this.state, 'todo': value})
  }
  handleSubmit(e) {
    e.preventDefault();
    this.state.todo !== '' && this.props.updateList(this.state.todo);
    this.setState({...this.state, 'todo': ''});
  }
  handleClear(e) {
    e.preventDefault();
    this.props.clearCompleted(); 
  }
   
  render() {
    return (
      <form>
        <input type='text'
               name='todo'
               value={this.state.todo}
               onChange={(e) => this.handleChange(e)} />
        <button onKeyDown={(e) => e.which === '13' && this.handleSubmit(e)}
                onClick={(e) => this.handleSubmit(e)} >Add
        </button> 
        <button onClick={(e) => this.handleClear(e) }>Clear</button>     
        <button onClick={(e) => this.props.save(e)}>Save</button>
      </form>
    )
  }
}


export default TodoForm;