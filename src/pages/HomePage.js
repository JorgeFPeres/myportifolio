import React from 'react'
import styled from 'styled-components'
import Center from '../components/Center'
import LeftBar from '../components/LeftBar'
import RigthBar from '../components/RigthBar'

const HomePage = () => {
  return (
    <NavContainer>
      <RigthBar />
      <LeftBar />
      <Center />
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 290px 1fr 120px 80px;
  }
`

export default HomePage
