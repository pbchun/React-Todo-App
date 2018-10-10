import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello Coding Garden!',
      newTodo: '',
      todos: [{
        title: 'Learn React',
        done: false
      }, {
        title: 'Learn JSX',
        done: false
      }]
    };
  }

  newTodoChange(event) {
    this.setState({
      newTodo: event.target.value
    })
  }

  formSubmitted(event) {
    event.preventDefault();
    // **Optional way of using a const**
    // const todos = this.state.todos.slice();
    // todos.push({
    //   title: this.state.newTodo,
    //   done: false
    // })
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Task</label>
          <input onChange={(event) => this.newTodoChange(event)} id="newTodo" name="newTodo" value={this.state.newTodo} />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.title}>{todo.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
