import React, { useState } from "react";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { emojis, getRandomEmoji } from "../config/config";
import { Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  ":hover": { backgroundColor: "#D1CCCC" },
  transition: "all .5s",
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const TableRowCustom = ({ row, updateRows, teamId, getTeams }) => {
  const [points, setPoints] = useState(row != null ? row.points : 0);
  const [accomplishment, setAccomplishment] = useState(
    row != null ? row.accomplishment : "No tasks added!"
  );
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => {
    setIsEditing((prev) => !prev);
  };
  const deleteRow = (row) => {
    axios
      .delete(`http://localhost:8080/tasks/delete/${row.id}/${teamId}`)
      .then((res) => {
        console.log(res.data);
        updateRows();
      });
  };
  const emoji = getRandomEmoji();
  const deleteCurrentRow = () => {
    deleteRow(row);
  };
  const doneEditing = () => {
    if (row.accomplishment != accomplishment || row.points != points) {
      const newTask = {
        accomplishment: accomplishment,
        points: points,
      };
      setPoints(points);

      setAccomplishment(accomplishment);
      axios
        .patch(
          `http://localhost:8080/tasks/update/${row.id}/${teamId}`,
          newTask
        )
        .then((res) => {
          updateRows();
          getTeams();
        });
    }
    setIsEditing(false);
  };
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {emoji}
      </StyledTableCell>
      {row != null ? (
        <>
          {" "}
          <StyledTableCell align="left">
            {isEditing == false ? (
              row.accomplishment
            ) : (
              <input
                type="text"
                value={accomplishment}
                onChange={(ev) => {
                  setAccomplishment(ev.target.value);
                }}
              ></input>
            )}
          </StyledTableCell>
          <StyledTableCell align="left">
            {isEditing == false ? (
              row.points
            ) : (
              <input
                type="number"
                value={points}
                onChange={(ev) => {
                  setPoints(ev.target.value);
                }}
              ></input>
            )}
          </StyledTableCell>
          <StyledTableCell>
            {isEditing == false ? (
              <Button sx={{ color: "black" }} onClick={startEditing}>
                {" "}
                <EditIcon />{" "}
              </Button>
            ) : (
              <Button
                sx={{ color: "green" }}
                onClick={doneEditing}
                disabled={points > 0 || accomplishment != "" ? false : true}
              >
                {" "}
                <DoneIcon />{" "}
              </Button>
            )}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            <Button sx={{ color: "#ff5136" }} onClick={deleteCurrentRow}>
              <DeleteIcon />
            </Button>
          </StyledTableCell>
        </>
      ) : (
        <StyledTableCell>No tasks available</StyledTableCell>
      )}
    </StyledTableRow>
  );
};

export default TableRowCustom;
