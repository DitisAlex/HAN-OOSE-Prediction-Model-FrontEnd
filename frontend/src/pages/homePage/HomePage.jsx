import React, { Component } from 'react'

import Introduction from '../../components/homePage/Introduction'
import GraphCards from '../../components/homePage/GraphCards'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <GraphCards />
      </div>
    )
  }
}
