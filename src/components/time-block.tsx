import React from 'react';

type Props = {
  isSelected: Boolean;
  onClick: Function;
  children: any;
}

export default function({ isSelected, children, onClick }: Props) {
  return (
    <div className={`sign-in__time-block ${isSelected && "selected"}`} onClick={() => onClick()}>
      {children}
    </div>
  );
}

