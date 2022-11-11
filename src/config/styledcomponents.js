import { styled } from "@mui/system";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";

export const CardContainer = styled(Paper)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
  padding: "0.5rem",
  margin: "1rem 0",
  borderRadius: "12px",
  width: "16%",
  height: "180px",
  display: "inline-block",
  margin: "15px",
  cursor: "pointer",
  ":hover": { backgroundColor: "#D1CCCC" },
  transition: "all .5s",
});
export const TeamName = styled("div")({
  color: "#3a3a3a",
  fontSize: "2rem",
  flex: "1",
  margin: "0 1rem",
  color: "rgb(0, 0, 0)",
  textAlign: " center",
  fontFamily: "Noto Serif, serif",
});
export const TeamPoints = styled(Typography)({
  fontSize: " 2.5rem",
  fontWeight: "bold",
  backgroundColor: "#ff7b7b",
  border: "1px solid rgb(0, 0, 0)",
  WebkitBoxShadow: "5px 5px 15px 5px #929292",
  boxShadow: "3px 3px 5px 1px #929292",
  fontFamily: "Noto Serif ,serif",
  textAlign: "center",
  borderRadius: "12px",
  marginTop: " 40px",
});
