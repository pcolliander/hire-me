import React from 'react';
import Modal from './modal';

const pickUpHours = ['8', '9', '10', '11', '12', '1', '2', '3', '4' ];
const pickUpMinutes = ['0', '15', '30', '45'];

/* const pickUpHours =  */

export default function SignIn (child: Child) {
  return (
  <Modal>
    <div className='sign-in'>
      <h1>{child.name.fullName}</h1>
      <p>Show when {child.name.firstName} will be picked up.</p>
      { pickUpHours.map(hour => <div key={hour}>{hour}</div>) } 
      { pickUpMinutes.map(minutes => <div key={minutes}>{minutes}:{minutes}</div>) } 

      <div>
      <button className='button secondary'>Close</button>
      <button className='button primary'>Sign in</button>
      </div>
    </div>
  </Modal>
  )
}
