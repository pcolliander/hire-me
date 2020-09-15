import React, { useLayoutEffect } from 'react';
import ReactDom from 'react-dom';

const Portal = ({ children }: any) => {
  return ReactDom.createPortal(
      children,
      document.body
  );
}

// Hook

function useLockBodyScroll() {
  useLayoutEffect(() => {

    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;  

    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    }

  }, []); // Empty array ensures effect is only run on mount and unmount
}

export default function({ children } :any) {
  useLockBodyScroll();

  return (
    <Portal>
      <div className='backdrop'></div>
      <div className='modal'>{children}</div>
    </Portal>
  );
}

