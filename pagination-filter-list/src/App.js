import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: "Baby driver ",
        genre: "action",
        stroke: 5,
        like: true,
        rate: 4.2,
      },
      {
        id: 2,
        title: "Trip to Italy",
        genre: "comedy",
        stroke: 7,
        like: false,
        rate: 4.9,
      },
      {
        id: 3,
        title: "Gone girl",
        genre: "thriller",
        stroke: 10,
        like: false,
        rate: 3.9,
      },
      {
        id: 4,
        title: "The Sixth Sense",
        genre: "thriller",
        stroke: 2,
        like: false,
        rate: 4.2,
      },
      {
        id: 5,
        title: "The Avangers",
        genre: "action",
        stroke: 74,
        like: false,
        rate: 4.6,
      },
      {
        id: 6,
        title: "Airplane",
        genre: "comedy",
        stroke: 4,
        like: false,
        rate: 3.6,
      },
    ],
  };

  removeMovie = (id) => {
    const { movies } = this.state;
    const result = movies.filter((item) => item.id !== id);
    this.setState({ movies: result });
  };

  likeHandler = (id) => {
    const { movies } = this.state;
    const movie = movies.find((item) => item.id === id);
    const index = movies.indexOf(movie);
    const updated = movies.slice(index, 0);
    console.log(updated);
  };

  render() {
    const { movies } = this.state;

    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stroke</th>
              <th>Rating</th>
              <th>Like</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.genre}</td>
                <td>{item.stroke}</td>
                <td>{item.rate}</td>
                <td>{item.like}</td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
