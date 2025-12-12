import React from 'react'
import { Routes,Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import BookAppointmentForm from './BookAppointmentForm'
import Navbar from './Navbar'
import Bookings from './Bookings'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes> 
       <Route path='/'element={<LandingPage/>}/>
       <Route path='/bookingform'element={<BookAppointmentForm/>}/>
       <Route path='/bookings' element={<Bookings/>}/>
      </Routes>

      
    </div>
  )
}

export default App
