import React from 'react'
import Faqitems from './Faqitems'
import {faqs} from '../../assets/Faq/faq'

const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item,index)=>(
            <Faqitems item={item} key={index}/>
        ))}
    </ul>
  )
}

export default FaqList