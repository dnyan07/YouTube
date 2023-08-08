import React from 'react'
import Button from './Button'

function ButtonList() {

  const list = ['All','Games','Song','live', 'cricket','All','Games','Song','live', 'cricket' ]
  return (
    <div className='flex'>
      {
        list.map((item,index)=><Button key={index}name={item}/>
        )
      }
      {/* <Button name='All'/>
      <Button name='Game'/>
      <Button name='Song'/>
      <Button name ='live'/>
      <Button name ='basketball'/>
      <Button name='cricket'/>
      <Button name='Song'/>
      <Button name ='live'/>
      <Button name ='basketball'/>
      <Button name='cricket'/>
      <Button name='cricket'/> */}
    </div>
  )
}

export default ButtonList