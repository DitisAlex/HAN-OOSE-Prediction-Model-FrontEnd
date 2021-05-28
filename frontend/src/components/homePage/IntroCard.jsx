import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText, Col } from 'reactstrap'
import { withRouter } from 'react-router-dom'

class IntroCard extends Component {
  render() {
    const link = this.props.link
    const { history } = this.props

    function handleClick() {
      history.push(link)
    }

    return (
      <Col>
        <Card body>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>{this.props.description}</CardText>
          <Button id={this.props.title} onClick={handleClick} color="primary">
            Go to graph
          </Button>
        </Card>
      </Col>
    )
  }
}

export default withRouter(IntroCard)
