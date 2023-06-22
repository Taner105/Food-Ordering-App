import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

const About = () => {
  return (
    <Box sx={{ bgcolor: "secondary.main", py: 5, mt: 14 }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: "30px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: { xs: "350px", md: "600px" },
            width: "100%",
          }}
        >
          <Image
            className="imageStyle"
            src="/about-img.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Title propStyle={{ fontSize: "40px" }}>We Are Feane</Title>
          <Typography>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don`t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn`t anything embarrassing hidden in the
            middle of text. All
          </Typography>
          <Button
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
            Read More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
