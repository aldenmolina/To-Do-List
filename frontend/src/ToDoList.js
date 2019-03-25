import React, { Component } from "react";

class ToDoList extends Component {
  render() {
    const { todos } = this.props;
    const todoListItems = todos.map(item => <li>{item}</li>);
    return <ul>{todoListItems}</ul>;
  }
}

export default ToDoList;
