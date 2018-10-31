import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Peter's Upcoming Events",
      newTodo: '',
      todos: [{
        title: 'Cherub',
        date: '11/3/18',
        location: 'Ogden Theater',
        done: false
      }, {
        title: 'Book Hotel',
        done: false
      }, {
        title: 'Book Flights',
        done: false
      }, {
        title: 'Book Rental Car',
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
          <label htmlFor="newTodo">Add A New Event</label>
          <input onChange={(event) => this.newTodoChange(event)} id="newTodo" name="newTodo" value={this.state.newTodo} />
          <button type="submit">Add Event</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={todo.title}>
              <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" />
              {/* <span style={{
                textDecoration: todo.done ? 'line-through' : 'inherit'
              }}>{todo.title}</span> */}
              <h3 className={todo.done ? 'done' : ''}>{todo.title}</h3>
              <h5 className="event-date">{todo.date}</h5>
              <h4 className="event-location">{todo.location}</h4>
              <button className="remove-btn" onClick={() => this.removeTodo(index)}>Remove</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
