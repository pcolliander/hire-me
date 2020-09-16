import React, { useState } from 'react';
import Modal from './modal';
import TimeBlock from './time-block';
import api from './api';

const hours = ['08', '09', '10', '11', '12', '13', '14', '15', '16' ];
const quarters = ['00', '15', '30', '45'];

type Props = {
  child: Child;
  onClose: Function;
}

export default function SignIn ({ child, onClose }: Props) {
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [selectedQuarter, setSelectedQuarter] = useState<string>(quarters[0]);

  return (
    <Modal>
      <div className='sign-in'>
        <h1>Sign in {child.name.fullName}</h1>
        <h2>What hour can {child.name.firstName} be picked up?</h2>
        <div className='sign-in__hours' >
          { hours.map(hour => <TimeBlock onClick={() => setSelectedHour(hour)} isSelected={hour === selectedHour}  key={hour}>{hour}:00</TimeBlock>) } 
        </div>

            <h2>
              { selectedHour
                ?  'Please specify what quarter of the hour'
                : <i>(After selecting an hour you can specify quarter of the hour)</i>
              }
            </h2>
            { selectedHour &&
              <div className='sign-in__quarters' >
                { quarters.map(quarter => <TimeBlock onClick={() => setSelectedQuarter(quarter)} isSelected={quarter === selectedQuarter} key={quarter}>{selectedHour}:{quarter}</TimeBlock>) } 
              </div>
            }

        <div className='modal__footer'>
          <button className='button' onClick={() => onClose()}>Close</button>
          { selectedHour && selectedQuarter &&
            <button 
              onClick={(() => api.signIn(child.childId, `${selectedHour}:${selectedQuarter}`))}
              className='button primary'>I confirm {child.name.firstName} will be picked up at {selectedHour}:{selectedQuarter}</button>
          }
          </div>
      </div>
    </Modal>
  );
}

