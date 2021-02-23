import React, { Component } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FcDislike, FcLike } from "react-icons/fc";
import Pagination from "./components/Pagination/Pagination";
import { paginate } from "./utils/paginate";
import fakeMovies from "./services/fakeMovies";
import Filter from "./components/Filter/Filter";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/TableMovies/MovieList";

export default class App extends Component {
  state = {
    currentPage: 1,
    pageSize: 3,
    sortColumn: { path: "title", order: "asc" },
    movies: [],
    selectedGenre: "",
  };

  componentDidMount() {
    this.setState({ movies: fakeMovies });
  }

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

  filterHandler = (genre) => {
    const { movies } = this.state;
    if (genre === "all") {
      this.setState({
        movies: fakeMovies,
      });
    } else {
      const updated = fakeMovies.filter((item) => item.genre === genre.name);
      this.setState({ movies: updated, currentPage: 1 });
    }
    console.log(this.state.movies);
  };
  onSortColumn = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      movies: allMovies,
      currentPage,
      selectedGenre,
      sortColumn,
      pageSize,
    } = this.state;

    const count = allMovies.length;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    if (count === 0) return <p>There is none movie.</p>;

    return (
      <div style={{ padding: "20px 15px" }}>
        <h2>All movies in list {count} </h2>
        <Row>
          <Col lg={3} sm={5}>
            <Filter onListClick={this.filterHandler} />
          </Col>
          <Col lg={9} sm={7}>
            <MovieList
              onSort={this.onSortColumn}
              sortColumn={sortColumn}
              onDelete={this.removeMovie}
              onLike={this.likeHandler}
              movies={movies}
            />
            <Pagination
              onPageClick={this.pageHandler}
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
