import React, { useState } from 'react';
import SignIn from './sign-in';

export default function Avatar(child: Child) {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <div onClick={() => setShowSignIn(true)} className='child'>
        <img src={child.image.small} alt="" />
        <p>{child.name.firstName}</p>
      </div>

      { showSignIn &&
        <SignIn {...child} />
      }
    </>
  )
}