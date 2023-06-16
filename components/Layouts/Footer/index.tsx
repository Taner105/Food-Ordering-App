import Title from "@/components/ui/Title";
import { Container, Box, Typography, Grid } from "@mui/material";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { RiPinterestFill } from "react-icons/ri";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#222831",
        color: "#fff",
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: { xs: 5, md: 0 },
            pt: 5,
            pb: 5,
          }}
        >
          <Grid
            xs={12}
            md={4}
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Title propStyle={{ fontSize: "30px" }}>Contact Us</Title>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                mt: 2,
              }}
            >
              <MdLocationOn />
              <Typography>Location</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <BsFillTelephoneFill />
              <Typography>Call +90 5534603374</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <IoMdMail />
              <Typography>taneraydogan59@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={4}
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Title propStyle={{ fontSize: "30px" }}>Feane</Title>

            <Typography sx={{ mt: 2, px: { xs: 0, sm: 10, md: 0 } }}>
              {" "}
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </Typography>

            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                fontSize: "30px",
              }}
            >
              <AiFillFacebook />
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillInstagram />
              <RiPinterestFill />
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={4}
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Title propStyle={{ fontSize: "30px" }}>Opening Hours</Title>
            <Typography sx={{ mt: 2 }}> Everyday</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Typography>10.00 Am -10.00 Pm</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box pb={3}>
          <Typography sx={{ textAlign: "center" }}>
            © 2022 All Rights Reserved By Free Html Templates
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
