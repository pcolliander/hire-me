import React, { useState } from 'react';
import SignIn from './sign-in';
import SignOut from './sign-out';
import checkmark from '../checkmark.svg';

export default function Avatar(child: Child) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);

  return (
    <>
      <div
        onClick={() => child.checkedIn ? setShowSignOut(true) : setShowSignIn(true)}
        className={`child ${child.checkedIn ? "checked-in" : ""}`}>
        <img className='avatar' src={child.image.small} alt='' />
        <p>{child.name.firstName}</p>
        { child.checkedIn && <img className='checkmark' src={checkmark} alt='' /> }
      </div>

      { showSignIn &&
        <SignIn child={child} onClose={() => setShowSignIn(false)} />
      }

      { showSignOut &&
        <SignOut child={child} onClose={() => setShowSignOut(false)} />
      }

    </>
  )
}
