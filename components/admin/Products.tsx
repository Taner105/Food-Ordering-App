import { Box, Grid, Typography, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Title from "../ui/Title";
import Image from "next/image";
import axios from "axios";

function createData(Id: string, title: string, price: number) {
  return { Id, title, price };
}

const Products = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure you want to delete this product?")) {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
        );
        if (res.status === 200) {
          // toast.success("Product Deleted!");
          getProducts();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box mt={5} sx={{ width: "100%" }}>
      <Title propStyle={{ fontSize: "40px", marginBottom: 2 }}>Products</Title>
      <TableContainer
        sx={{ maxHeight: "400px", overflow: "auto" }}
        component={Paper}
      >
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
            {products.length > 0 &&
              products.map((row) => (
                <TableRow
                  key={row._id}
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
                        src={row.img}
                        alt={row.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    {row._id.substring(0, 10)}...
                  </TableCell>

                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">${row.prices[0]}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleDelete(row._id)}
                      type="submit"
                      sx={{
                        display: "inline-block",
                        bgcolor: "error.main",
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
