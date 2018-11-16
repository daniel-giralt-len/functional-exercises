import React from 'react'
import styled from 'styled-components'

const DisplayWrapper = styled.div`
  border: 1px solid black;
  text-align: right;
  border-radius: 6px;
  padding-right: 12px;
`

class Display extends React.Component {
  constructor({ number = 0, operation = '' }) {
    super()
    this.state = { number }
  }

  render() {
    return (<DisplayWrapper>
      <h2>{this.state.number}</h2>
      <h4>{this.state.operation}</h4>
    </DisplayWrapper>)
  }
}

export default Display