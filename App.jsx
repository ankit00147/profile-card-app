import React from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My Profile</h1>
      <ProfileCard 
        name="ankit chandel"
        
        bio="Frontend Developer from ashoknagar, MP"
      />
    </div>
  );
}

export default App;
