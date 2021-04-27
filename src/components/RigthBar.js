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
  position: absolute;
  right: 0;

  .container {
    position: fixed;
    height: calc(100vh - 0px);
    display: flex;
    align-items: center;
    height: 100vh;

    z-index: 9999;
    background: white;
    box-shadow: rgb(47 122 249 / 10%) 4px 0px 10px;
    transition: all 300ms ease-in 0s;
    padding: 30px;
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
