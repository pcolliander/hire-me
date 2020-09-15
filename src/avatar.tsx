import React from 'react';

type Child = {
  childId: string;
  name: { firstName: string, fullName: string };
  image: { small: string };
}


export default function Avatar({ image, name }: Child) {
  return (
      <div className='child'>
        <img src={image.small} alt="" />
        <p>{name.firstName}</p>
      </div>
  )
}
