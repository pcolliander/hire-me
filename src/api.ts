import constants from './constants';

const fetchChildren = (setChildren: Function) => {
  window.fetch(`https://tryfamly.co/api/daycare/tablet/group?accessToken=${constants.accessToken}&groupId=${constants.groupId}&institutionId=${constants.institutionId}`)
        .then(response => response.json())
        .then(data => setChildren(data.children));
}

const signIn = (childId: string, pickupTime: string) => {
 window.fetch(`https://tryfamly.co/api/v2/children/${childId}/checkins?accessToken=${constants.accessToken}`, {
   method: 'POST',
   body: JSON.stringify({ pickupTime })
 })
 .then(() => window.location.reload())
}

const signOut = (childId: string) => {
 window.fetch(`https://tryfamly.co/api/v2/children/${childId}/checkout?accessToken=${constants.accessToken}`, {
   method: 'POST',
 })
 .then(() => window.location.reload());
}



export default {
  fetchChildren,
  signIn,
  signOut,
}
