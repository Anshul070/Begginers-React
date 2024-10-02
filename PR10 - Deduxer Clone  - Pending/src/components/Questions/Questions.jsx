import React from 'react'
import Button from '../Button'
import QuestionCards from './QuestionCards'

function Questions() {
  return (
    <div className='w-full min-h-[120vh] px-20 py-28'>
        <div className=' flex justify-between items-center'>
            <h1 className='text-7xl'>Frequently asked <br />questions</h1>
            <Button text={"Ask your question"}/>
        </div>
        <QuestionCards />
    </div>
  )
}

export default Questions