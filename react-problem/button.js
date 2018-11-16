import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  width:${props => props.large ? '50%' : '25%'};
  font-size: 1.3em;
  height: 3em;
`

class Button extends React.Component {
  constructor({ value = 'X', large = false }) {
    super()
    this.state = { value, large }
  }

  render() {
    return (<ButtonWrapper large={this.state.large}>
      {this.state.value}
    </ButtonWrapper>)
  }
}

export default Button