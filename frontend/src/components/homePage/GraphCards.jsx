import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import IntroCard from './IntroCard'

export default class GraphCards extends Component {
  render() {
    return (
      <Container>
        <Row>
          <IntroCard
            title="Energy consumption"
            description="View the current, past and future energy consumption in this easy graph."
          />
          <IntroCard
            title="Energy production"
            description="View the current, past and future energy production in this easy graph."
          />
        </Row>
      </Container>
    )
  }
}
