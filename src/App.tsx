import React, { useState, useEffect } from 'react';
import Avatar from './avatar';
import api from './api';
import './css/style.css';

export default function App() {
  const [children, setChildren] = useState<Child[]>([]);

  useEffect(() => {
    api.fetchChildren(setChildren);
  }, []);

  return (
    <div className="App">
      <h1>Elephants</h1>
      <div className='children__container'>
        {children.map(child => <Avatar {...child} key={child.childId} /> )}
      </div>
    </div>
  );
}

