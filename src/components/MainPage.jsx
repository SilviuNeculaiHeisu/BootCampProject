import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import axios from "axios";
const MainPage = () => {
  const [globalActiveState, setGlobalActiveState] = useState(false);
  const getTeams = () => {
    axios.get(`http://localhost:8080/all`).then((res) => {
      setTeams(
        res.data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
      );
    });
  };
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getTeams();
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
            getTeams={getTeams}
          />
        );
      })}
    </>
  );
};

export default MainPage;
