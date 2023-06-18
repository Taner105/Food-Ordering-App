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

function createData(Id: string, title: string, price: number) {
  return { Id, title, price };
}

const rows = [createData("63107f5559...", "Good Pizza", 18)];

const Products = () => {
  return (
    <Box mt={5} sx={{ width: "100%" }}>
      <Title propStyle={{ fontSize: "40px", marginBottom: 2 }}>Products</Title>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ bgcolor: "#222831", color: "#fff" }}>
            <TableRow sx={{ color: "#fff" }}>
              <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>
                IMAGE
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#fff" }}
                align="right"
              >
                ID
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#fff" }}
                align="right"
              >
                TITLE
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#fff" }}
                align="right"
              >
                PRICE
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
                  <Box
                    sx={{
                      position: "relative",
                      height: "50px",
                      width: "50px",
                    }}
                  >
                    <Image
                      src="/pizza.webp"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </TableCell>
                <TableCell align="right">{row.Id}</TableCell>

                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">${row.price}</TableCell>
                <TableCell align="right">
                  <Button
                    type="submit"
                    sx={{
                      display: "inline-block",
                      backgroundColor: "red",
                      borderRadius: "25px",
                      textTransform: "capitalize",
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "red",
                        opacity: "70%",
                        transition: "all",
                        color: "#fff",
                      },
                    }}
                  >
                    Delete
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

export default Products;
