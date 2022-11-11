import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddingForm = ({ setRows, teamId }) => {
  const [accomplishment, setAccomplishment] = useState("");
  const [points, setPoints] = useState(0);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 200,
    border: "2px solid #000",
    backgroundColor: "white",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={style}>
      <Grid container>
        <Grid item xs={6} md={6}>
          <FormControl>
            <InputLabel htmlFor="my-input">Accomplishment</InputLabel>
            <Input
              id="my-input"
              aria-describedby=""
              type="text"
              value={accomplishment}
              onChange={(ev) => {
                setAccomplishment(ev.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6}>
          <FormControl>
            <InputLabel htmlFor="points">Points</InputLabel>
            <Input
              id="points"
              aria-describedby="helper-text"
              type="number"
              value={points}
              onChange={(ev) => {
                setPoints(ev.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid container mt={15} ml={6}>
          <Grid item xs={5} md={5}>
            <Button
              variant="contained"
              onClick={() => {
                if (accomplishment.trim().length > 0 && points > 0)
                  setRows((prev) => [
                    ...prev,
                    {
                      teamId: teamId,
                      accomplishment: accomplishment,
                      points: points,
                    },
                  ]);
              }}
            >
              Add new Task
            </Button>
          </Grid>
          <Grid item xs={4} md={4}></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddingForm;
