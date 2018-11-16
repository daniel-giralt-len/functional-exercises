import React from 'react'
import Button from './button'
import styled from 'styled-components'

const KeyboardWrapper = styled.div`
  border-radius: 6px;
  padding-right: 12px;
  margin-top: 10px
`

class Keyboard extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (<KeyboardWrapper>
      <Button value='1' />
      <Button value='2' />
      <Button value='3' />
      <Button value='+' />
      <Button value='4' />
      <Button value='5' />
      <Button value='6' />
      <Button value='-' />
      <Button value='7' />
      <Button value='8' />
      <Button value='9' />
      <Button value='*' />
      <Button value='0' large />
      <Button value='/' />
      <Button value='CE' />
    </KeyboardWrapper>)
  }
}

export default Keyboard