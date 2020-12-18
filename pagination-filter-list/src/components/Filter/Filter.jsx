import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

export default class componentName extends Component {
    state = {
        genres: [
            {
                id: 1,
                name: 'action'
            },
            {
                id: 2,
                name: 'thriller'
            },
            {
                id: 3,
                name: 'comedy'
            },
        ]
    }
  render() {
      const {genres} = this.state;
      const {onListClick } = this.props
    return (
      <>
        <ListGroup>
            <ListGroup.Item  onClick={() => {onListClick('all')}} style={{cursor: "pointer"}} >
                All Types
            </ListGroup.Item>
            {
                genres.map(item => (
                    <ListGroup.Item onClick={() => {onListClick(item)}} style={{cursor: "pointer"}} key={item.id}>
                        {item.name}
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
      </>
    )
  }
}
