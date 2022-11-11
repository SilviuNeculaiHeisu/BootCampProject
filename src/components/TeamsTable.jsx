import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableRowCustom from "./TableRowCustom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddingForm from "./Modals/AddingFormModal";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(teamId, accomplishment, points) {
  return { teamId, accomplishment, points };
}

export default function TeamsTable(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const deleteRow = (row) => {
    let tempRows = rows;
    tempRows = tempRows.filter((currentRow) => row != currentRow);
    console.log(tempRows);
    setRows(tempRows);
  };
  const changeRow = (row) => {
    let tempRows = rows;
    tempRows.forEach((temporaryRow) => {
      if (row.teamId == temporaryRow.teamId) {
        temporaryRow.accomplishment = row.accomplishment;
        temporaryRow.points = row.points;
      }
    });
    setRows(tempRows);
  };
  const [rows, setRows] = useState([
    createData(
      ` ${props.teamId ? props.teamId : 0}`,
      "They did something amazing",
      2
    ),
    createData(
      ` ${props.teamId ? props.teamId : 0}`,
      "They did something amazing",
      10
    ),
    createData(
      `${props.teamId ? props.teamId : 0}`,
      "They did something amazing",
      5
    ),
    createData(
      ` ${props.teamId ? props.teamId : 0}`,
      "They did something amazing",
      6
    ),
    createData(
      `${props.teamId ? props.teamId : 0}`,
      "They did something amazing",
      3
    ),
    createData(
      ` ${props.teamId ? props.teamId : 0}`,
      "They did something amazing",
      5
    ),
    createData(
      `${props.teamId ? props.teamId : 0}`,
      "They did something amazing",
      2
    ),
  ]);
  return (
    <>
      <Grid container>
        <Grid item xs={3} md={3}></Grid>
        <Grid item xs={3} md={3}></Grid>

        <Grid item xs={3} md={3}>
          <Typography variant="h5" mt={2} textAlign="end">
            {" "}
            Add new Task
          </Typography>
        </Grid>

        <Grid item xs={3} md={3}>
          <Button onClick={handleOpen} sx={{ color: "black" }}>
            <AddIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div>
                {" "}
                <AddingForm
                  setRows={setRows}
                  setOpen={setOpen}
                  teamId={props.teamId}
                />
              </div>
            </Modal>
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 500, maxWidth: "70%", margin: "auto" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                Team ID: {props.teamId}
              </StyledTableCell>
              <StyledTableCell align="left">accomplishment</StyledTableCell>
              <StyledTableCell align="left">Points</StyledTableCell>
              <StyledTableCell align="left">Edit</StyledTableCell>
              <StyledTableCell align="left">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRowCustom
                key={index}
                row={row}
                changeRow={changeRow}
                deleteRow={deleteRow}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
        <Grid item xs={3} md={3}>
          <Button
            onClick={() => {
              props.toggleDataTable();
            }}
            sx={{ color: "black" }}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: "50px", cursor: "pointer" }}
            />
          </Button>
        </Grid>
        <Grid item xs={3} md={3}></Grid>
        <Grid item xs={3} md={3}></Grid>
      </Grid>
    </>
  );
}
