import React, { useState } from 'react';
import SignIn from './sign-in';
import checkmark from './checkmark.svg';

export default function Avatar(child: Child) {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <div onClick={() => setShowSignIn(true)} className={`child ${child.checkedIn ? "checked-in" : ""}`}>
        <img className='avatar' src={child.image.small} alt='' />
        <p>{child.name.firstName}</p>
        { child.checkedIn && <img className='checkmark' src={checkmark} /> }
      </div>

      { showSignIn &&
        <SignIn child={child} onClose={() => setShowSignIn(false)} />
      }
    </>
  )
}
