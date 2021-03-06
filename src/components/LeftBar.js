import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Infos from './Infos'

import foto from '../assets/jorge1.JPG'
import { GrFacebookOption, GrLinkedinOption } from 'react-icons/gr'
import { FaWhatsapp } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const LeftBar = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='container-img'>
          <img src={foto} alt='foto' className='image' />
          <div className='name-title'>
            <h3>Jorge F. Peres</h3>
            <h4>Front End Developer</h4>
          </div>
          <div className='social-icons'>
            <a href='http://www.fb.com' className='icons' target='_blank'>
              <GrFacebookOption />
            </a>
            <a href='' className='icons'>
              <AiFillInstagram />
            </a>
            <a href='' className='icons'>
              <AiOutlineTwitter />
            </a>
            <a href='' className='icons'>
              <GrLinkedinOption />
            </a>
            <a href='' className='icons'>
              <FaWhatsapp />
            </a>
          </div>
          <div className='underline'></div>
        </div>
        <Infos />
        <Button />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  grid-column: 2 / 3;
  grid-row: 1;
  .container {
    position: fixed;
    width: 290px;
    height: 100vh;
    z-index: 9999;
    background: white;
    box-shadow: rgb(47 122 249 / 10%) 4px 0px 10px;
    transition: all 300ms ease-in 0s;
    padding: 30px;
  }
  .container-img {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .social-icons {
    display: flex;
    justify-content: space-around;
    width: 80%;
    transition: all ease-in 300ms;
  }
  .social-icons::hover {
    filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.35));
  }
  .image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }
  .icons {
    display: flex;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #ffb400;
    color: #2b2b2b;
    align-items: center;
    justify-content: center;
    transition: all ease-in 300ms;
  }
  .icons:hover {
    color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .name-title {
    h3 {
      padding-top: 40px;
      font-size: 18px;
      font-weight: 500;
      color: #2b2b2b;
    }
    h4 {
      margin: 15px 0;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      opacity: 0.5;
      color: rgb(43, 43, 43);
    }
  }
  .underline {
    margin-top: 25px;
    background: #e5e5e5;
    width: 100%;
    height: 2px;
    padding: 0 0 0 0;
    opacity: 0.8;
  }
`

export default LeftBar
