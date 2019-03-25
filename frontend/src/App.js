import React, { Component } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItemText: "Foo",
      todos: ["Add a todo", "Remove todo"]
    };
  }
  resetAll = () => {
    this.setState({ currentItemText: "" });
    this.setState({ todos: [] });
  };
  setText = text => {
    this.setState({ currentItemText: text });
  };
  addToList = text => {
    const newTodos = [...this.state.todos, text];
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div>
        <AddToDo
          text={this.state.currentItemText}
          setText={this.setText}
          addToList={this.addToList}
        />
        <ToDoList todos={this.state.todos} />
        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}

export default App;
