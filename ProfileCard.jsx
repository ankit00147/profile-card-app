// src/components/ProfileCard.jsx
import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, avatar, bio }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;
