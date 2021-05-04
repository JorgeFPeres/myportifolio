import React from 'react'
import styled from 'styled-components'

const Button = () => {
  return (
    <Wrapper>
      <div className='underline1'></div>
      <button className='btn-cv'> Download Cv </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .underline1 {
    background: #e5e5e5;
    width: 100%;
    height: 2px;
    padding: 0 0 0 0;
    opacity: 0.8;
  }

  .btn-cv {
    margin-top: 17px;
    margin-left: 40px;
    text-transform: uppercase;
    display: inline-block;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-color: transparent;
    width: 140px;
    height: 40px;
    background: #ffb400;
    color: black;
  }
`

export default Button
