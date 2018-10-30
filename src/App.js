import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hi Peter!',
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

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // copy the array
    todos[index] = {...todos[index]}; // copy the todo
    todos[index].done = event.target.checked; // update done property on the copied todo
    this.setState({
      todos
    })
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // copy the array
    todos.splice(index, 1);
    this.setState({
      todos
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
          {this.state.todos.map((todo, index) => {
            return (<li key={todo.title}>
            <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" />
            {/* <span style={{
              textDecoration: todo.done ? 'line-through' : 'inherit'
            }}>{todo.title}</span> */}
            <span className={todo.done ? 'done' : ''}>{todo.title}</span>
            <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default App;
