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
  const rows = [
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
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Team ID</StyledTableCell>
            <StyledTableCell align="right">accomplishment</StyledTableCell>
            <StyledTableCell align="right">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRowCustom row={row}></TableRowCustom>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
