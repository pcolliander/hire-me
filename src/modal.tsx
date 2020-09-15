import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const Portal = ({ children }: any) => {
  return ReactDom.createPortal(
      children,
      document.body
  );
}

export default function({ children } :any) {
  const targetRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    if (targetRef.current) {
      disableBodyScroll(targetRef.current)
    }

    return function cleanup() {
      if (targetRef.current) {
        enableBodyScroll(targetRef.current);
      }
    }
  }, []);

  return (
    <Portal>
      <div className='backdrop'></div>
      <div ref={targetRef} className='modal'>{children}</div>
    </Portal>
  );
}

