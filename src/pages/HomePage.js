import React from 'react'
import styled from 'styled-components'
import Center from '../components/Center'
import LeftBar from '../components/LeftBar'
import RigthBar from '../components/RigthBar'

const HomePage = () => {
  return (
    <NavContainer>
      <LeftBar />
      <Center />

      <RigthBar />
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  flex-wrap: nowrap;
  position: relative;
  }
`

export default HomePage
