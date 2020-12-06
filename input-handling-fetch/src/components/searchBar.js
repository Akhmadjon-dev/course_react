import React, { Component } from "react";

export default class searchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  submitHandler = (event) => {
    event.preventDefault();
    // console.log(this.state.text);
    this.props.onSubmitHandler(this.state.text);
  };
  inputHandler = (e) => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div className="container mt-3">
        <form onSubmit={this.submitHandler}>
          <input
            value={this.state.text}
            onChange={this.inputHandler}
            type="text"
          />
          <button style={{ display: "none" }}></button>
        </form>
      </div>
    );
  }
}