import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'value': '',
    }
  }
  handleChange(e) {
    const {value} = e.target;
    this.setState({'value': value})
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
    this.state.value !== '' && this.props.updateList(this.state.value);
    this.setState({'value': ''});
  }
  handleClear(e) {
    e.preventDefault();
    this.props.clearCompleted(); 
  }

  render() {
    return (
      <form>
        <input type='text'
               name='value'
               value={this.state.value}
               onChange={(e) => this.handleChange(e)} />
        <button onKeyDown={(e) => e.which === '13' && this.handleSubmit(e)}
                onClick={(e) => this.handleSubmit(e)} >Add
        </button> 
        <button onClick={(e) => this.handleClear(e) }>Clear</button>     
      </form>
    )
  }
}


export default TodoForm;