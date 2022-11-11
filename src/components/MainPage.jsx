import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import TeamCard from "./TeamCard";

const MainPage = () => {
  const [globalActiveState, setGlobalActiveState] = useState(false);
  const [totalPoints, setTotalPoints] = useState([]);
  const teams = [
    { teamId: 1, points: 999 },
    { teamId: 2, points: 5 },
    { teamId: 3, points: 6 },
    { teamId: 4, points: 7 },
    { teamId: 5, points: 9 },
    { teamId: 6, points: 10 },
    { teamId: 7, points: 12 },
  ];
  return (
    <>
      <Typography variant="h3" fontFamily={"Noto Serif"} textAlign={"center"}>
        Solera Teams Project. Bootcamp 4. Team 1
      </Typography>

      {teams.map((team, index) => {
        return (
          <TeamCard
            key={index}
            teamId={team.teamId}
            points={team.points}
            globalActiveState={globalActiveState}
            setGlobalActiveState={setGlobalActiveState}
          />
        );
      })}
    </>
  );
};

export default MainPage;
