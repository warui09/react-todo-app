import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: ""
  };

  onChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({ title: "" });
    } else {
      alert("Write item");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
