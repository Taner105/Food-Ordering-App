import { Box, Grid, Typography, Button, Container } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Title from "../ui/Title";

function createData(
  Id: string,
  address: string,
  date: string,
  total: number,
  status: string
) {
  return { Id, address, date, total, status };
}

const rows = [
  createData("63107f5559...", "Bandırma", "01-09-2023", 18, "preparing"),
];

const Order = () => {
  return (
    <Box mt={5} sx={{ width: "100%" }}>
      <Title propStyle={{ fontSize: "40px", marginBottom: 2 }}>Order</Title>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ bgcolor: "#222831", color: "#fff" }}>
            <TableRow sx={{ color: "#fff" }}>
              <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>
                ID
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#fff" }}
                align="right"
              >
                ADDRESS
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#fff" }}
                align="right"
              >
                DATE
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#fff" }}
                align="right"
              >
                TOTAL
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#fff" }}
                align="right"
              >
                STATUS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                  ":hover": {
                    bgcolor: "#ffbe33",
                  },
                }}
              >
                <TableCell
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  component="th"
                  scope="row"
                >
                  {row.Id}
                </TableCell>
                <TableCell align="right">{row.address}</TableCell>

                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">${row.total}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Order;
