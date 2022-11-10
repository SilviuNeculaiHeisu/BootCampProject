import React from "react";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
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
const TableRowCustom = ({ row }) => {
  return (
    <StyledTableRow key={row.teamId}>
      <StyledTableCell component="th" scope="row">
        {row.teamId}
      </StyledTableCell>
      <StyledTableCell align="right">{row.accomplishment}</StyledTableCell>
      <StyledTableCell align="right">{row.points}</StyledTableCell>
    </StyledTableRow>
  );
};

export default TableRowCustom;
