import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const testData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: testData,
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  updateList = (value) => {
    //huh, this needs to be an arrow function, otherwise 'this' = updateList?
    //why doesn't this happen for my other functions?
    console.log(this);
    this.setState({
      todoList: [...this.state.todoList,
        {task: value,
         id: Date.now(),
         completed: false,
        }
      ]
    })
  }
  toggleCompleted = updatedElem => {
    console.log(this.state.todoList);
    this.setState({
      todoList: 
        this.state.todoList.map( elem => {
          if (updatedElem.id === elem.id)
            return {...elem, completed: !elem.completed}
          return {...elem};
          })
        })
    }
  clearCompleted = () => {
    this.setState({
      todoList:
        this.state.todoList.filter( elem => {
          return !elem.completed;
        })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList}
                  toggleCompleted={this.toggleCompleted}j
        />
        <TodoForm updateList={this.updateList}
                  clearCompleted={this.clearCompleted}
        /> 
      </div>
    );
  }
}

export default App;
