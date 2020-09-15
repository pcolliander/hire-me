import React, { useState, useEffect } from 'react';
import Avatar from './avatar';
import './style.css';

const accessToken = '234ffdb8-0889-4be3-b096-97ab1679752c';
const groupId = '11fc220c-ebba-4e55-9346-cd1eed714620';
const institutionId = 'fb6c8114-387e-4051-8cf7-4e388a77b673';

const fetchChildren = (setChildren: Function) => {
  window.fetch(`https://tryfamly.co/api/daycare/tablet/group?accessToken=${accessToken}&groupId=${groupId}&institutionId=${institutionId}`)
        .then(response => response.json())
        .then(data => setChildren(data.children));
}

export default function App() {
  const [children, setChildren] = useState<Child[]>([]);

  useEffect(() => {
    fetchChildren(setChildren);
  }, []);

  console.log('children', children);

  return (
    <div className="App">
      <h1>Elephants</h1>
      <div className='children__container'>
        {children.map(child => <Avatar {...child} key={child.childId} /> )}
      </div>
    </div>
  );
}

