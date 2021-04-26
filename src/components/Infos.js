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
        <h4>Languages</h4>
        <div>
          <div className='languages-infos'>
            <p>Portuguese</p>
            <span>100%</span>
          </div>
          <div className='bars'></div>
          <div className='languages-infos english'>
            <p>English</p>
            <span>80%</span>
          </div>
          <div className='bars teste'></div>
          <div className='languages-infos spanish'>
            <p>Spanish</p>
            <span>50%</span>
          </div>
          <div className='bars teste1'></div>
        </div>
      </div>
      <div className='underline'></div>
      <div className='languages-container'>
        <h4>Skills</h4>
        <div>
          <div className='languages-infos'>
            <p>HTML</p>
            <span>90%</span>
          </div>
          <div className='bars'></div>
          <div className='languages-infos english'>
            <p>CSS</p>
            <span>80%</span>
          </div>
          <div className='bars teste'></div>
          <div className='languages-infos english'>
            <p>JS</p>
            <span>80%</span>
          </div>
          <div className='bars teste'></div>
          <div className='languages-infos spanish'>
            <p>React JS</p>
            <span>50%</span>
          </div>
          <div className='bars teste1'></div>
        </div>
        <div className='underline'></div>
        <div className='languages-container'>
          <h4>Extra Skills</h4>
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
    padding-top: 30px;
    h4 {
      font-size: 18px;
      font-weight: 500;
      color: #2b2b2b;
      line-height: 22.25px;
    }
  }
  .bars {
    display: flex;
    height: 9px;
    border: 1px solid #ffb400;
    border-radius: 20px;
    padding: 2px;
  }
  .bars::before {
    content: '';
    width: 100%;
    border-radius: 20px;
    background: #ffb400;
  }
  /* automatizar */
  .teste::before {
    width: 80%;
  }

  .english {
    width: 87%;
  }

  .teste1::before {
    width: 50%;
  }

  .spanish {
    width: 57%;
  }
  .languages-infos {
    margin-top: 1rem;
    margin-bottom: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    color: #767676;
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
