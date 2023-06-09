import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Title from "./ui/Title";
import React from "react";
import Slider from "react-slick";

const dummyData = [
  {
    title: "Fast Food Restaurant",
    subtitle:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus   sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magniquos nihil ducimus libero ipsam. Order Now",
  },
  {
    title: "The new address of quality",
    subtitle:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus   sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magniquos nihil ducimus libero ipsam. Order Now",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots: JSX.Element) => (
      <div className="appendDots">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: "10px",
          height: "10px",
          bgcolor: "white",
          borderRadius: "50%",
          mt: 8,
        }}
      ></Box>
    ),
  };
  return (
    <Box
      sx={{
        position: "relative",
        mt: { xs: "-56px", sm: "-68px" },
        minHeight: "100vh",
      }}
    >
      <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
        <Image src="/hero-bg.webp" alt="" layout="fill" objectFit="cover" />
      </Box>

      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        maxWidth="lg"
      >
        <Slider {...settings}>
          {dummyData.map((data, i) => {
            return (
              <Box key={i}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "30px",
                  }}
                >
                  <Title propStyle={{ color: "#fff", fontSize: "56px" }}>
                    {data.title}
                  </Title>
                  <Typography
                    sx={{ color: "#fff", fontSize: "14px", width: "50%" }}
                  >
                    {data.subtitle}
                  </Typography>
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
                    Order Now
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
};

export default Carousel;
