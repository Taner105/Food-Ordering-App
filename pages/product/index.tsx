import Title from "@/components/ui/Title";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Container,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <Container>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "550px",
            width: "100%",
            flex: 1,
          }}
        >
          <Image src="/f6.webp" alt="" layout="fill" objectFit="contain" />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Title propStyle={{ fontSize: "48px" }}>Good Pizza</Title>
          <span
            style={{
              fontSize: "24px",
              color: "#ffbe33",
              fontWeight: "bold",
            }}
          >
            $10
          </span>
          <Typography sx={{ fontSize: "14px", pr: 5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
            molestiae.
          </Typography>
          <Box>
            <Typography fontWeight="bold" variant="h5">
              Choose the size
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "35px", md: "56px" },
                  width: "40px",
                }}
              >
                <Image
                  src="/size.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: -10,
                    fontSize: "12px",
                    background: "#ffbe33",
                    borderRadius: "36px",
                    padding: "0 5px ",
                    fontWeight: "bold",
                  }}
                >
                  small
                </span>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "35px", md: "64px" },
                  width: "50px",
                }}
              >
                <Image
                  src="/size.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: -10,
                    fontSize: "12px",
                    background: "#ffbe33",
                    borderRadius: "36px",
                    padding: "0 5px ",
                    fontWeight: "bold",
                  }}
                >
                  medium
                </span>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "35px", md: "72px" },
                  width: "60px",
                }}
              >
                <Image
                  src="/size.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: -10,
                    fontSize: "12px",
                    background: "#ffbe33",
                    borderRadius: "36px",
                    padding: "0 5px ",
                    fontWeight: "bold",
                  }}
                >
                  large
                </span>
              </Box>
            </Box>
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  name="gilad"
                  sx={{
                    "&.Mui-checked": {
                      color: "#ffbe33",
                    },
                  }}
                />
              }
              label="Ketçap"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="gilad"
                  sx={{
                    "&.Mui-checked": {
                      color: "#ffbe33",
                    },
                  }}
                />
              }
              label="Mayanoz"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="gilad"
                  sx={{
                    "&.Mui-checked": {
                      color: "#ffbe33",
                    },
                  }}
                />
              }
              label="Acı"
            />
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
            Add To Card
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
