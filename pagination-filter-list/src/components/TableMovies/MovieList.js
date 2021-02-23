import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { FcDislike, FcLike } from "react-icons/fc";

export default class MovieList extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onDelete, onLike } = this.props;
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th onClick={() => this.raiseSort("title")}>Title</th>
              <th onClick={() => this.raiseSort("genre")}>Genre</th>
              <th onClick={() => this.raiseSort("stroke")}>Stroke</th>
              <th onClick={() => this.raiseSort("rate")}>Rating</th>
              <th onClick={() => this.raiseSort("like")}>Like</th>
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
                      onLike(item);
                    }}
                  >
                    {item.like ? <FcLike /> : <FcDislike />}
                  </div>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      onDelete(item.id);
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
      </div>
    );
  }
}
