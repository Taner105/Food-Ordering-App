import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Title from "./ui/Title";
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <Box sx={{ mt: { xs: "-56px", sm: "-68px" } }}>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Title propStyle={{ color: "#fff", fontSize: "56px" }}>
              Fast Food Restaurant
            </Title>
            <Typography sx={{ color: "#fff", fontSize: "14px", width: "50%" }}>
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam. Order Now
            </Typography>
            <Button
              sx={{
                display: "inline-block",
                backgroundColor: "#ffbe33",
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
        </Slider>
      </Container>
    </Box>
  );
};

export default Carousel;
