import React from 'react'
import styled from 'styled-components'
import img from '../assets/jorge1.JPG'

const Center = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='container-info'>
          <div className='text-area'>
            <div>
              <h2> I'm Jorge</h2>
              <h2> Peres</h2>
              <h2>
                <span>Front-End</span>
              </h2>
              <h2> Developer</h2>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              doloremque non ducimus facere sunt? Reprehenderit impedit nisi ea
              ad deserunt!
            </p>
            <button>hire-me</button>
          </div>
          <div>{/* <img src={img} alt='' /> */}</div>
        </div>
        <div className='square'></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-column: 3 / 4;
  grid-row: 1;
  width: 100%;
  background: #f0f0f6;

  .container {
    height: 600px;
    background: white;
    margin: 0 2rem;
  }
  .container::after {
    width: 20px;
    height: 20px;
    background-color: red;
  }

  .container-info {
    display: flex;
    overflow: hidden;
  }

  .text-area {
    padding: 50px;
    h2 {
      font-size: 3.5rem;
      span {
        color: #ffb400;
      }
    }
    p {
      width: 25rem;
      margin-top: 40px;
    }
    button {
      margin-top: 110px;
      text-transform: uppercase;
      display: inline-block;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      border-color: transparent;
      border-radius: 6px;
      width: 140px;
      height: 40px;
      background: #ffb400;
      color: black;
    }
  }
  img {
    align-self: flex-end;
    height: 20%;
    width: 20%;
  }
`

export default Center
