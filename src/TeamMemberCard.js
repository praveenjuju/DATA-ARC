import React from 'react';
import './TeamMemberCard.css';

function TeamMemberCard({ name, role, photo }) {
  return (
    <div className="team-card">
      <img src={photo} alt={name} className="team-photo" />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default TeamMemberCard;
