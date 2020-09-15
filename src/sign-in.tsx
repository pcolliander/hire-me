import React, { useState } from 'react';
import Modal from './modal';
import TimeBlock from './time-block';

const hours = ['08', '09', '10', '11', '12', '13', '14', '15', '16' ];
const quarters = ['00', '15', '30', '45'];

type Props = {
  child: Child;
  onClose: Function;
}

/* POST https://tryfamly.co/api/v2/children/<childId>/checkins */

const accessToken = '234ffdb8-0889-4be3-b096-97ab1679752c';

const checkin = (childId: string, pickupTime: string) => {
 window.fetch(`https://tryfamly.co/api/v2/children/${childId}/checkins?accessToken=${accessToken}`, {
   method: 'POST',
   body: JSON.stringify({ pickupTime })
 })
}

/* Arguments: { */
/* 	accessToken: <accessToken> */
/* 	pickupTime: 16:00 */
/* } */
/* ``` */

/* ### Checkout child */
/* POST https://tryfamly.co/api/v2/children/<childId>/checkout */
/* Arguments: { */
/* 	accessToken: <accessToken> */
/* } */


export default function SignIn ({ child, onClose }: Props) {
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [selectedQuarter, setSelectedQuarter] = useState<string>("00");

  return (
    <Modal>
      <div className='sign-in'>
        <h1>{child.name.fullName}</h1>
        <h2>What hour can {child.name.firstName} be picked up?</h2>
        <div className='sign-in__hours' >
          { hours.map(hour => <TimeBlock onClick={() => setSelectedHour(hour)} isSelected={hour === selectedHour}  key={hour}>{hour}:00</TimeBlock>) } 
        </div>

            <h2>
              { selectedHour
                ?  'Please specify what quarter of the hour'
                : <i>(After selecting an hour you can specify quarter)</i>
              }
            </h2>
            { selectedHour &&
              <div className='sign-in__quarters' >
                { quarters.map(quarter => <TimeBlock onClick={() => setSelectedQuarter(quarter)} isSelected={quarter === selectedQuarter} key={quarter}>{selectedHour}:{quarter}</TimeBlock>) } 
              </div>
            }

        <div>
          <button className='button secondary' onClick={() => onClose()}>Close</button>
          { selectedHour && selectedQuarter &&
            <button 
              onClick={(() => checkin(child.childId, `${selectedHour}:${selectedQuarter}`))}
              className='button primary'>I confirm {child.name.firstName} will be picked up at {selectedHour}:{selectedQuarter}</button>
          }
          </div>
      </div>
    </Modal>
  );
}

