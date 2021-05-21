import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

export default class Introduction extends Component {
  render() {
    return (
      <Jumbotron className="p-5">
        <h1 className="display-3">Welcome</h1>
        <p className="lead">
          On this site you can view the energy production and consumption of the
          HANwatts energy grid.
        </p>
      </Jumbotron>
    )
  }
}
