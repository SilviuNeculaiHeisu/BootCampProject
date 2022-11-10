import TeamsTable from "./components/TeamsTable";
import TeamCard from "./components/TeamCard";
import { useState } from "react";
function App() {
  const [globalActiveState,setGlobalActiveState]=useState(false);
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
      <h1>Solera Teams. Bootcamp 4</h1>

      {teams.map((team) => {
        return (
          <TeamCard
            key={team.teamID}
            teamId={team.teamId}
            points={team.points}
            globalActiveState={globalActiveState}
            setGlobalActiveState={setGlobalActiveState}
          />
        );
      })}
    </>
  );
}

export default App;
