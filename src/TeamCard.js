import React from "react";
import './TeamCard.css'

const TeamCard = () => {
  return <div className="team-card" onClick={TeamCard}>
    <h2>Team Name</h2>
    <div className="team-card__points">0</div>
  </div>;
};

export default TeamCard;
