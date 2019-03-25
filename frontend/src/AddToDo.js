import React, { Component } from "react";

class AddToDo extends Component {
  onAdd = () => {
    this.props.addToList(this.props.text);
    this.props.setText("");
  };
  onTextChange = e => {
    this.props.setText(e.target.value);
  };

  render() {
    const { text } = this.props;
    return (
      <>
        <label>
          Item:
          <input type="text" value={text} onChange={this.onTextChange} />
        </label>
        <button onClick={this.onAdd}>Add</button>
      </>
    );
  }
}

export default AddToDo;
