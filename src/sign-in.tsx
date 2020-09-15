import React, { useState } from 'react';
import Modal from './modal';
import TimeBlock from './time-block';

const hours = ['8', '9', '10', '11', '12', '13', '14', '15', '16' ];
const quarters = ['00', '15', '30', '45'];

type Props = {
  child: Child;
  onClose: Function;
}
export default function SignIn ({ child, onClose }: Props) {
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [selectedQuarter, setSelectedQuarter] = useState<string>("00");

  return (
    <Modal>
      <div className='sign-in'>
        <h1>{child.name.fullName}</h1>
        <p>Show when {child.name.firstName} will be picked up.</p>

        <div className='sign-in__hours' >
          { hours.map(hour => <TimeBlock onClick={() => setSelectedHour(hour)} isSelected={hour === selectedHour}  key={hour}>{hour}:00</TimeBlock>) } 
        </div>

        { selectedHour &&
          <div className='sign-in__quarters' >
            { quarters.map(quarter => <TimeBlock onClick={() => setSelectedQuarter(quarter)} isSelected={quarter === selectedQuarter} key={quarter}>{selectedHour}:{quarter}</TimeBlock>) } 
          </div>
        }

        <p>{child.name.firstName} will be picked up at {selectedHour}:{selectedQuarter}</p>

        <div>
          <button className='button secondary' onClick={() => onClose()}>Close</button>
          <button className='button primary'>Sign in</button>
        </div>
      </div>
    </Modal>
  );
}
