import React, { useEffect, useState } from 'react'

const bookingUrl="http://localhost:8080/api/appointments"


const Bookings = () => {
    const[userBookings, setUserBooking] =useState([]) 
    const bookingHandler=async()=>{
        try {
            const response=await fetch(bookingUrl)
            const newData=await response.json()
            setUserBooking(newData)

        } catch (error) {
          console.log(error)  
        }
    }
    useEffect(()=>{
        bookingHandler()
    },[])
  return (
    <div>
      {userBookings.map((item)=>{
        return(
            <div>
               {item.fullName} 
            </div>
        )
      })}
    </div>
  )
}

export default Bookings
