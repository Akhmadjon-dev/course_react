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
  onSortColumn = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
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
            <Table responsive>
              <thead>
                <tr>
                  <th onClick={() => this.onSortColumn("title")}>Title</th>
                  <th onClick={() => this.onSortColumn("genre")}>Genre</th>
                  <th onClick={() => this.onSortColumn("stroke")}>Stroke</th>
                  <th onClick={() => this.onSortColumn("rate")}>Rating</th>
                  <th onClick={() => this.onSortColumn("like")}>Like</th>
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
          </Col>
        </Row>
      </div>
    );
  }
}
