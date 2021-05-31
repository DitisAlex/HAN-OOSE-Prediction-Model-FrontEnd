import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import IntroCard from './IntroCard'

export default class GraphCards extends Component {
  render() {
    return (
      <Container>
        <Row>
          <IntroCard
            title="EV power"
            description="On this page you can view the current and past energy consumption in this easy graph."
            link="/consumption"
          />
          <IntroCard
            title="Solar power"
            description="On this page you can view the current, past and future solar power in this easy graph."
            link="/production"
          />
        </Row>
      </Container>
    )
  }
}
