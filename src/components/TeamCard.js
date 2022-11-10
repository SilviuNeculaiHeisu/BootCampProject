import React from "react";
import "./TeamCard.css";
import TeamsTable from "./TeamsTable";
import { useState } from "react";
const TeamCard = ({
  teamId,
  points,
  globalActiveState,
  setGlobalActiveState,
}) => {
  const [isTableActive, setIsTableActive] = useState(false);
  const [indexTeam, setIndexTeam] = useState(0);
  const toggleDataTable = () => {
    setIsTableActive((prev) => !prev);
    setGlobalActiveState((prev) => !prev);
  };
  return (
    <>
      {isTableActive == false ? (
        globalActiveState == false ? (
          <div
            className="team-card"
            onClick={() => {
              setIndexTeam(teamId);
              toggleDataTable();
            }}
          >
            <h2>{teamId ? teamId : "Team 0"}</h2>
            <div className="team-card__points">{points ? points : 0}</div>
          </div>
        ) : (
          ""
        )
      ) : (
        <TeamsTable teamId={teamId} toggleDataTable={toggleDataTable} />
      )}
    </>
  );
};

export default TeamCard;
