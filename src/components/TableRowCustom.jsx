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

const TableRowCustom = ({ row, changeRow, deleteRow }) => {
  const [points, setPoints] = useState(row.points);
  const [accomplishment, setAccomplishment] = useState(row.accomplishment);
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => {
    setIsEditing((prev) => !prev);
  };
  const emoji = getRandomEmoji();
  const deleteCurrentRow = () => {
    deleteRow(row);
  };
  const doneEditing = () => {
    const newRow = {
      teamId: row.teamId,
      accomplishment: accomplishment,
      points: points,
    };
    console.log("HERE");
    changeRow(newRow);
    setIsEditing(false);
  };
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {emoji}
      </StyledTableCell>

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
          <Button sx={{ color: "green" }} onClick={doneEditing}>
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
    </StyledTableRow>
  );
};

export default TableRowCustom;
