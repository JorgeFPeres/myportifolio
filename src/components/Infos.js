import React from 'react'
import styled from 'styled-components'
import { BsCaretRight } from 'react-icons/bs'

const Infos = () => {
  return (
    <Wrapper>
      <div className='block'>
        <p>Age:</p>
        <span>30</span>
      </div>
      <div className='block'>
        <p>Residence:</p>
        <span>Brazil</span>
      </div>
      <div className='block'>
        <p>Status:</p>
        <span className='open-hire'>Open to hire</span>
      </div>
      <div className='block'>
        <p>Adress:</p>
        <span>Curitiba-PR</span>
      </div>
      <div className='underline'></div>
      <div className='languages-container'>
        <h4 className='title'>Languages</h4>
        <div className='skill'>
          <p>Node</p>
          <div className='skill-container'>
            <div className='skill-value'></div>
            <p className='skill-text'>50%</p>
          </div>
        </div>
        <div className='skill'>
          <p>Node</p>
          <div className='skill-container'>
            <div className='skill-value'></div>
            <p className='skill-text'>50%</p>
          </div>
        </div>
        <div className='skill'>
          <p>Node</p>
          <div className='skill-container'>
            <div className='skill-value'></div>
            <p className='skill-text'>50%</p>
          </div>
        </div>

        <div className='underline'></div>
        <h4 className='title'>Skills</h4>
        <div className='skill'>
          <p>Node</p>
          <div className='skill-container'>
            <div className='skill-value'></div>
            <p className='skill-text'>50%</p>
          </div>
        </div>
        <div className='skill'>
          <p>Node</p>
          <div className='skill-container'>
            <div className='skill-value'></div>
            <p className='skill-text'>50%</p>
          </div>
        </div>
        <div className='skill'>
          <p>Node</p>
          <div className='skill-container'>
            <div className='skill-value'></div>
            <p className='skill-text'>50%</p>
          </div>
        </div>
      </div>
      <div className='underline'></div>
      <div className='languages-container'>
        <h4 className='title'>Extra Skills</h4>
        <div className='extra-skills'>
          <BsCaretRight className='color-icon' />
          <p>Styled Components, Sass</p>
        </div>
        <div className='extra-skills'>
          <BsCaretRight className='color-icon' />
          <p>Next Js, React Native</p>
        </div>
        <div className='extra-skills'>
          <BsCaretRight className='color-icon' />
          <p>Gulp, Webpack</p>
        </div>
        <div className='extra-skills'>
          <BsCaretRight className='color-icon' />
          <p>Git knowldge</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: auto;
  height: calc(100vh - 425px);
  ::-webkit-scrollbar {
    display: none;
  }
  .block {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;

    span {
      padding: 5px 8px;
    }
    p {
      color: #2b2b2b;
      background: #ffb400;
      padding: 5px 8px;
    }
  }
  .underline {
    margin-top: 30px;
    background: #e5e5e5;
    width: 100%;
    height: 2px;
    padding: 0 0 0 0;
    opacity: 0.8;
  }
  .open-hire {
    color: #7eb942;
  }
  .languages-container {
    h4 {
      padding-top: 30px;
      font-size: 18px;
      font-weight: 500;
      color: #2b2b2b;
      line-height: 22.25px;
    }
  }

  .skill {
    margin-bottom: 1.25rem;
  }
  .skill p {
    margin-bottom: 0.1rem;
    text-transform: capitalize;
  }
  .skill-container {
    background-color: var(--clr-white);
    width: 100%;
    height: 0.5rem;
    border-radius: var(--radius);
    position: relative;
  }
  .skill-value {
    background: #ffb400;
    width: 50%;
    height: 100%;
    border-radius: var(--radius);
    position: absolute;
    top: 0;
    left: 0;
  }
  .skill-text {
    font-size: 13px;
    position: absolute;
    top: -1.3rem;
    left: 50%;
    transform: translate(-50%);
  }
  .extra-skills {
    padding: 10px 0;
    display: flex;
    align-items: center;

    p {
      padding-left: 5px;
      font-size: 14px;
    }
  }
  .color-icon {
    color: #ffb400;
  }
`
export default Infos
