import React from 'react'
import Display from './display'
import Keyboard from './keyboard'
import styled from 'styled-components'

const CalculatorWrapper = styled.div`
  border: 5px solid grey;
  border-radius: 6px;
  padding: 12px;
  width: 500px;
`

class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
  }

  render() {
    return (<CalculatorWrapper>
      <Display number={this.state.number} />
      <Keyboard />
    </CalculatorWrapper>)
  }
}
export default Calculator