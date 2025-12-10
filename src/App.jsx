import React from 'react'
import { Routes,Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import BookAppointmentForm from './BookAppointmentForm'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes> 
       <Route path='/'element={<LandingPage/>}/>
       <Route path='/bookingform'element={<BookAppointmentForm/>}/>
      </Routes>
      
    </div>
  )
}

export default App
