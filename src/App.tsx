import React, { useState, useEffect } from 'react';
import Avatar from './avatar';
import './css/style.css';
import constants from './constants';

const fetchChildren = (setChildren: Function) => {
  window.fetch(`https://tryfamly.co/api/daycare/tablet/group?accessToken=${constants.accessToken}&groupId=${constants.groupId}&institutionId=${constants.institutionId}`)
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

