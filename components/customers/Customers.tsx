import { Container, Box, Button } from "@mui/material";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <Button
        sx={{
          position: "absolute",
          bottom: -60,
          left: { xs: "10%", md: "40%" },
          bgcolor: "#ffbe33",
          color: "#fff",
          mr: -2,
          ":hover": {
            backgroundColor: "#ffbe33",
            opacity: "70%",
            transition: "all",
            color: "#fff",
          },
        }}
        onClick={onClick}
      >
        <IoIosArrowBack />
      </Button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <Button
        sx={{
          position: "absolute",
          bottom: -60,
          right: { xs: "10%", md: "40%" },
          bgcolor: "#ffbe33",
          color: "#fff",
          ":hover": {
            backgroundColor: "#ffbe33",
            opacity: "70%",
            transition: "all",
            color: "#fff",
          },
        }}
        onClick={onClick}
      >
        <IoIosArrowForward />
      </Button>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container sx={{ mb: 100 }}>
      <Box>
        <Title propStyle={{ textAlign: "center", fontSize: "40px" }}>
          What Says Our Customers{" "}
        </Title>
      </Box>
      <Slider {...settings}>
        <CustomerItem imgSrc="/client1.jpg" />
        <CustomerItem imgSrc="/client2.jpg" />
        <CustomerItem imgSrc="/client2.jpg" />
        <CustomerItem imgSrc="/client2.jpg" />
        <CustomerItem imgSrc="/client2.jpg" />
      </Slider>
    </Container>
  );
};

export default Customers;
