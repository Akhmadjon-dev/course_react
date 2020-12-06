import React, { Component } from "react";
import axios from "./axios/axios";
import SearchBar from "./components/searchBar";
import ImageList from "./components/imgList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  state = {
    img: [],
  };
  onFormSubmit = async (text) => {
    const response = await axios.get("/search/photos", {
      params: { query: text },
    });
    this.setState({ img: response.data.results });
    console.log("app", response);
  };
  render() {
    return (
      <div className="app">
        <SearchBar onSubmitHandler={this.onFormSubmit} />
        <ImageList img={this.state.img} />
      </div>
    );
  }
}
