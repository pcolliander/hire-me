import React from 'react';
import api from './api';
import Modal from './modal';

type Props = {
  child: Child;
  onClose: Function;
}

export default function SignOut({ child, onClose }: Props) {
  return (
    <Modal>
      <div className='sign-out'>
        <div className='sign-out__child'>
          <h1>{child.name.fullName}</h1>
          <img className='avatar' src={child.image.small} alt='' />
        </div>
        <div className='modal__footer'>
          <button className='button' onClick={() => onClose()}>Close</button>
          <button onClick={() => api.signOut(child.childId)} className='button primary'>Sign out {child.name.firstName}</button>
        </div>
      </div>
    </Modal>
  );
}

