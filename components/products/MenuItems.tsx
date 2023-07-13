import { Box, Button, Typography, Grid } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";

const MenuItems = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box sx={{ bgcolor: "secondary.main", borderRadius: "10px" }}>
        <Box
          className="centerXY"
          sx={{
            height: "210px",
            width: "100%",
            bgcolor: "#f1f2f3",
            borderBottomLeftRadius: "45px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <Link href={`/product/${product._id}`}>
            <Box
              sx={{
                position: "relative",
                height: "160px",
                width: "160px",
              }}
            >
              <Image
                priority
                className="imageStyle"
                src={product.img}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Link>
        </Box>

        <Box
          sx={{
            color: "#fff",
            p: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            {product.title}
          </Typography>
          <Typography sx={{ color: "#fff" }}>{product.desc}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>$ {product.prices[0]}</span>
            <Button
              className="imageStyle"
              sx={{
                color: "#fff",
                bgcolor: "primary.main",
                ":hover": {
                  backgroundColor: "primary.main",
                  opacity: "70%",
                  transition: "all",
                  color: "#fff",
                },
              }}
            >
              <RiShoppingCart2Fill />
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default MenuItems;
