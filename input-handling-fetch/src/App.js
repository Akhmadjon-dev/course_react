import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  onFormSubmit(text) {
    console.log("app", text);
  }
  render() {
    return (
      <div className="app">
        <SearchBar onSubmitHandler={this.onFormSubmit} />
      </div>
    );
  }
}
