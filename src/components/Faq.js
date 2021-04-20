import React from 'react'
import './Faq.css'
import SimpleAccordion from './SimpleAccordion'
import Acc from './Acc'
const Faq = () => {
  return (
    <div className='faq-container'>
      <div className='faq-inner'>
        <div className='picture'>
          <div className='box'>
            <img src='../images/illustration-box-desktop.svg' alt='illustration' />
          </div>
        </div>
        <div className='accordion'>
          <Acc title='FAQ' />
        </div>
      </div>
    </div>
  )
}

export default Faq
