import React from 'react'
import styled from 'styled-components'
import { RiHome2Fill, RiChat4Fill } from 'react-icons/ri'
import { GiFeather } from 'react-icons/gi'
import { FaFileCode, FaUserGraduate, FaFolderOpen } from 'react-icons/fa'

const RigthBar = () => {
  return (
    <Wrapper>
      <div className='container'>
        <ul className='menu1'>
          <li className='menu active'>
            <RiHome2Fill className='icon active' />
          </li>
          <li className='menu'>
            <FaFileCode className='icon' />
          </li>
          <li className='menu'>
            <FaUserGraduate className='icon' />
          </li>
          <li className='menu'>
            <FaFolderOpen className='icon' />
          </li>
          <li className='menu'>
            <GiFeather className='icon' />
          </li>
          <li className='menu'>
            <RiChat4Fill className='icon' />
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  grid-column: 4 / 5;
  grid-row: 1;
  .container {
    height: 100vh;
    width: 120px;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background: white;
    box-shadow: rgb(47 122 249 / 10%) 4px 0px 10px;
    transition: all 300ms ease-in 0s;
  }

  .menu1 {
    display: flex-column;
  }
  .menu {
    margin: 40px 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f0f0f6;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    font-size: 20px;
    color: #767676;
  }
  .active {
    background: rgb(255, 180, 0);
    color: #2b2b2b;
  }
`

export default RigthBar
