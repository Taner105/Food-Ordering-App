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
import Image from "next/image";

function createData(
  product: string,
  customer: string,
  total: number,
  payment: string,
  status: string
) {
  return { product, customer, total, payment, status };
}

const rows = [
  createData("63107f5559...", "Taner Aydoğan", 18, "Cash", "preparing"),
];

const Orders = () => {
  return (
    <Box mt={5} sx={{ width: "100%" }}>
      <Title propStyle={{ fontSize: "40px", marginBottom: 2 }}>Orders</Title>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ bgcolor: "#222831", color: "#fff" }}>
            <TableRow sx={{ color: "#fff" }}>
              <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>
                PRODUCT ID
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#fff" }}
                align="right"
              >
                CUSTOMER
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
                PAYMENT
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#fff" }}
                align="right"
              >
                STATUS
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#fff" }}
                align="right"
              >
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.product}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                  ":hover": {
                    bgcolor: "#ffbe33",
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.product}
                </TableCell>
                <TableCell align="right">{row.customer}</TableCell>

                <TableCell align="right">${row.total}</TableCell>
                <TableCell align="right">{row.payment}</TableCell>
                <TableCell align="right">{row.status}</TableCell>

                <TableCell align="right">
                  <Button
                    type="submit"
                    sx={{
                      display: "inline-block",
                      backgroundColor: "green",
                      borderRadius: "12px",
                      textTransform: "capitalize",
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "green",
                        opacity: "70%",
                        transition: "all",
                        color: "#fff",
                      },
                    }}
                  >
                    Next Stage
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders;
