import React, { useState } from 'react';

const pickUpHours = ['8', '9', '10', '11', '12', '1', '2', '3', '4' ];
const pickUpMinutes = ['0', '15', '30', '45'];

export default function SignIn (child: Child) {
  return (
    <div className='checkin'>
    <p>Show when {child.name.firstName} will be picked up.</p>
      { pickUpHours.map(hour => <div key={hour}>{hour}</div>) } 
      { pickUpMinutes.map(minutes => <div key={minutes}>{minutes}:{minutes}</div>) } 
    </div>
  )
}
