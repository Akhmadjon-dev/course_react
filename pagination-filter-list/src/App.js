import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { FcDislike, FcLike } from "react-icons/fc";
import Pagination from "./components/Pagination/Pagination";
import { paginate } from "./utils/paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  state = {
    currentPage: 1,
    pageSize: 3,
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

  pageHandler = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  removeMovie = (id) => {
    const { movies } = this.state;
    const result = movies.filter((item) => item.id !== id);
    this.setState({ movies: result });
  };

  likeHandler = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie, like: !movie.like };
    this.setState({ movies });
  };

  render() {
    const { movies: allMovies, currentPage, pageSize } = this.state;
    const count = allMovies.length;
    const movies = paginate(allMovies, currentPage, pageSize);
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
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.genre}</td>
                <td>{item.stroke}</td>
                <td>{item.rate}</td>
                <td>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      this.likeHandler(item);
                    }}
                  >
                    {item.like ? <FcLike /> : <FcDislike />}
                  </div>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      this.removeMovie(item.id);
                    }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination
          onPageClick={this.pageHandler}
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </div>
    );
  }
}
