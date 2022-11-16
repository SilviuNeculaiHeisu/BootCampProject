import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import axios from "axios";
const MainPage = () => {
  const [globalActiveState, setGlobalActiveState] = useState(false);

  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/all`).then((res) => {
      setTeams(res.data);
    });
  }, []);

  return (
    <>
      <Typography variant="h3" fontFamily={"Noto Serif"} textAlign={"center"}>
        Solera Teams Project. Bootcamp 4. Team 1
      </Typography>

      {teams.map((team, index) => {
        return (
          <TeamCard
            key={index}
            teamId={team.id}
            teamName={team.name}
           points={team.totalPoints}
            globalActiveState={globalActiveState}
            setGlobalActiveState={setGlobalActiveState}
          />
        );
      })}
    </>
  );
};

export default MainPage;
