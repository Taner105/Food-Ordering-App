import { Box, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";

const dummyData = [
  {
    title: "Delicious Pizza",
    subTitle:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$20",
    image: "/f2.webp",
  },
  {
    title: "Delicious Burger",
    subTitle:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$32",
    image: "/f3.webp",
  },
  {
    title: "Delicious Pasta",
    subTitle:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$20",
    image: "/f4.webp",
  },
  {
    title: "French Fries",
    subTitle:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$17",
    image: "/f5.webp",
  },
  {
    title: "Tasty Burger",
    subTitle:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$15",
    image: "/f6.webp",
  },
];
const MenuItems = () => {
  return (
    <>
      {dummyData.map((data, i) => {
        return (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Box sx={{ bgcolor: "#222831", borderRadius: "10px" }}>
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
                <Link href="/product">
                  <Box
                    sx={{
                      position: "relative",
                      height: "160px",
                      width: "160px",
                    }}
                  >
                    <Image
                      className="imageStyle"
                      src={data.image}
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
                  {data.title}
                </Typography>
                <Typography sx={{ color: "#fff" }}>{data.subTitle}</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{data.price}</span>
                  <Button
                    className="imageStyle"
                    sx={{
                      color: "#fff",
                      bgcolor: "#ffbe33",
                      ":hover": {
                        backgroundColor: "#ffbe33",
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
      })}
    </>
  );
};

export default MenuItems;
