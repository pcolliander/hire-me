import React, { useLayoutEffect } from 'react';
import ReactDom from 'react-dom';

const Portal = ({ children }: any) =>
  ReactDom.createPortal(
      children,
      document.body
    );

export default function({ children } :any) {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;  // Get original body overflow
    document.body.style.overflow = 'hidden'; // Prevent scrolling on mount
    return () => {
      document.body.style.overflow = originalStyle; // Re-enable scrolling when component unmounts
    }
  }, []);

  return (
    <Portal>
      <div className='backdrop'></div>
      <div className='modal'>{children}</div>
    </Portal>
  );
}

