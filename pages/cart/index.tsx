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
import { useSelector, useDispatch } from "react-redux";
import { reset } from "@/redux/cartSlice";

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

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
            <TableHead sx={{ bgcolor: "secondary.main", color: "#fff" }}>
              <TableRow sx={{ color: "#fff" }}>
                <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>
                  PRODUCT
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "#fff" }}
                  align="center"
                >
                  EXTRAS
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "#fff" }}
                  align="center"
                >
                  PRICE
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "#fff" }}
                  align="center"
                >
                  QUANTITY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                    ":hover": {
                      bgcolor: "primary.main",
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
                    scope="product"
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "30px",
                        width: "30px",
                      }}
                    >
                      <Image
                        src={product.img}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </Box>
                    {product.name}
                  </TableCell>
                  <TableCell align="center">
                    {product.extras.map((item) => (
                      <span key={item.id}>{item.text} </span>
                    ))}
                  </TableCell>

                  <TableCell align="center">${product.price}</TableCell>
                  <TableCell align="center">{product.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
        sx={{
          bgcolor: "secondary.main",
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
            Subtotal :<span>${cart.total}</span>
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Discount :<span>$0.00</span>
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Total :<span>${cart.total}</span>
          </Typography>
        </Box>
        <Button
          onClick={() => dispatch(reset())}
          sx={{
            display: "inline-block",
            backgroundColor: "primary.main",
            borderRadius: "25px",
            color: "#fff",
            ":hover": {
              backgroundColor: "primary.main",
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

export default Cart;
