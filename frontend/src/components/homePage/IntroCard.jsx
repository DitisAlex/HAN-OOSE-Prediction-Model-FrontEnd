import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText, Col } from 'reactstrap'

export default class IntroCard extends Component {
  render() {
    return (
      <Col>
        <Card body>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>{this.props.description}</CardText>
          <Button color="primary">Go to graph</Button>
        </Card>
      </Col>
    )
  }
}
