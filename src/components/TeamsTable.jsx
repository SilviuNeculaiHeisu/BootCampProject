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
import axios from "axios";
import { useEffect } from "react";
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

function createData(teamName, accomplishment, points) {
  return { teamName, accomplishment, points };
}

export default function TeamsTable(props) {
  const updateRows = () => {
    axios.get(`http://localhost:8080/tasks/${props.teamId}`).then((res) => {
      if (res.data != null) {
        setRows(res.data);
        console.log(res.data);
      }
    });
  };
  const [rows, setRows] = useState([]);
  useEffect(() => {
    updateRows();
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const deleteRow = (row) => {
    axios.delete(`http://localhost:8080/tasks/delete/${row.id}`).then((res) => {
      console.log(res.data);
      updateRows();
    });
  };

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
                  updateRows={updateRows}
                  teamName={props.teamName}
                  teamId={props.teamId}
                  open={open}
                  onClose={handleClose}
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
                Team ID: {props.teamName}
              </StyledTableCell>
              <StyledTableCell align="left">accomplishment</StyledTableCell>
              <StyledTableCell align="left">Points</StyledTableCell>
              <StyledTableCell align="left">Edit</StyledTableCell>
              <StyledTableCell align="left">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRowCustom key={index} row={row} deleteRow={deleteRow} />
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
