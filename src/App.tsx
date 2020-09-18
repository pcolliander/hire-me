import React, { useState, useEffect } from 'react';
import Avatar from './avatar';
import api from './api';
import './css/style.css';

const search = (searchValue: string, child: Child) => 
  !searchValue ||
  (child.name.fullName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)

export default function App() {
  const [children, setChildren] = useState<Child[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    api.fetchChildren(setChildren);
  }, []);

  return (
    <div className="App">

    <header>
      <h1>Elephants</h1>
      <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type="" placeholder='search' />
    </header>

      <div className='children__container'>
        {children
          .filter(child => search(searchValue, child))
          .map(child => <Avatar {...child} key={child.childId} /> )}
      </div>
    </div>
  );
}

