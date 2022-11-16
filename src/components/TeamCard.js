import React, { useEffect } from "react";
import TeamsTable from "./TeamsTable";
import { useState } from "react";
import { Paper } from "@mui/material";
import { emojis } from "../config/config";
import { getRandomEmoji } from "../config/config";
import {
  CardContainer,
  TeamName,
  TeamPoints,
} from "../config/styledcomponents";
import axios from "axios";
const TeamCard = ({
  teamName,
  globalActiveState,
  setGlobalActiveState,
  teamId,
  points,
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
          <CardContainer
            elevation={4}
            onClick={() => {
              setIndexTeam(teamName);
              toggleDataTable();
            }}
          >
            <TeamName>
              {teamName ? teamName : "Team 0"} {getRandomEmoji()}
            </TeamName>
            <TeamPoints>{points ? points : 0}</TeamPoints>
          </CardContainer>
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
