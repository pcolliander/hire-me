const accessToken = '234ffdb8-0889-4be3-b096-97ab1679752c';
const groupId = '11fc220c-ebba-4e55-9346-cd1eed714620';
const institutionId = 'fb6c8114-387e-4051-8cf7-4e388a77b673';

const fetchChildren = (setChildren: Function) => {
  window.fetch(`https://tryfamly.co/api/daycare/tablet/group?accessToken=${accessToken}&groupId=${groupId}&institutionId=${institutionId}`)
        .then(response => response.json())
        .then(data => setChildren(data.children));
}

const signIn = (childId: string, pickupTime: string) => {
 window.fetch(`https://tryfamly.co/api/v2/children/${childId}/checkins?accessToken=${accessToken}`, {
   method: 'POST',
   body: JSON.stringify({ pickupTime })
 })
 .then(() => window.location.reload())
}

const signOut = (childId: string) => {
 window.fetch(`https://tryfamly.co/api/v2/children/${childId}/checkout?accessToken=${accessToken}`, {
   method: 'POST',
 })
 .then(() => window.location.reload());
}

export default {
  fetchChildren,
  signIn,
  signOut,
}
