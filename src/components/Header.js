import React from 'react'
import Navbar from './Navbar'
import Top from './Top'

export default function Header() {
  return (
    <>
    <Top/>
    <div className=' header-top'>
    <div className='container'>
        <Navbar/>
      <h1 className='heading-1'>We Are Builders</h1>
      <p className='para-1'>There are many variations of passages of Lorem Ipsum available, but the majority,<br/> There are many variations of passenges of</p>
      <button type='button' className='btn-1'>Contact Us</button>
    </div>
    </div>
    </>

  )
}
