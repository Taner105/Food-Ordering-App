import { Box, Grid, Typography, Button, Container } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Title from "@/components/ui/Title";
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const cart = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: "calc(100vh - 415px)",
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          p: { xs: "20px 10px", md: "20px 50px" },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ bgcolor: "#222831", color: "#fff" }}>
              <TableRow sx={{ color: "#fff" }}>
                <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>
                  PRODUCT
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "#fff" }}
                  align="right"
                >
                  EXTRAS
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
                  QUANTITY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
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
                        height: "30px",
                        width: "30px",
                      }}
                    >
                      <Image
                        src="/pizza.webp"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </Box>
                    {row.name}
                  </TableCell>

                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
        sx={{
          bgcolor: "#222831",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: "20px 0px" },
          gap: "20px",
        }}
        item
        xs={12}
        md={4}
      >
        <Title propStyle={{ fontSize: "40px", fontWeight: "bold" }}>
          {" "}
          CART TOTAL
        </Title>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Subtotal :<span>$20</span>
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Discount :<span>$0.00</span>
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Total :<span>$20</span>
          </Typography>
        </Box>
        <Button
          sx={{
            display: "inline-block",
            backgroundColor: "#ffbe33",
            borderRadius: "25px",
            color: "#fff",
            ":hover": {
              backgroundColor: "#ffbe33",
              opacity: "70%",
              transition: "all",
              color: "#fff",
            },
          }}
          variant="contained"
        >
          Checkout Now!
        </Button>
      </Grid>
    </Grid>
  );
};

export default cart;
