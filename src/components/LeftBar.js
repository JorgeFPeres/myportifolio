import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Infos from './Infos'
import Profile from './Profile'

const LeftBar = () => {
  return (
    <Wrapper>
      <Profile />
      <Infos />
      <Button />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: table-cell;
  width: 290px;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  background: white;
  box-shadow: rgb(47 122 249 / 10%) 4px 0px 10px;
  transition: all 300ms ease-in 0s;
  padding: 30px;
`

export default LeftBar
