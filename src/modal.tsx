import React from 'react';
import ReactDom from 'react-dom';

const Portal = ({ children }: any) => {
  return ReactDom.createPortal(
      children,
      document.body
  );
}

export default function({ children } :any) {
  return (
    <Portal>
      <div className='backdrop'></div>
      <div className='modal'>{children}</div>
    </Portal>
  );
}

