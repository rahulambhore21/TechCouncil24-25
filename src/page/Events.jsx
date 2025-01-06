import React from 'react'
import Slider from '../components/Slider/Slider'
import EventCards from '../components/EventCards'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

function Events() {
  return (
    <div className='w-full overflow-hidden'>
    <NavBar/>
    <Slider/>
    <EventCards/>
    <Footer/>
    </div>
  )
}

export default Events