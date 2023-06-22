import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Title from "./ui/Title";
import { FaShoppingCart } from "react-icons/fa";
import theme from "./theme";

const CampaignsItems = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
        flexWrap: "wrap",
        gap: "16px",
        bgcolor: "secondary.main",
        flex: 1,
        borderRadius: "8px",
        py: "20px",
        px: "15px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: 175,
          width: 175,
          overflow: "hidden",
          border: `5px solid ${theme.palette.primary.main}`,
          borderRadius: "50%",
        }}
      >
        <Image
          className="imageStyle"
          src="/o1.webp"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box sx={{ color: "#fff" }}>
        <Title propStyle={{ fontSize: "24px" }}>Tasty Thursdays</Title>
        <Box>
          <span style={{ fontSize: "40px" }}>20%</span>
          <span>Off</span>
        </Box>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
          endIcon={<FaShoppingCart size="18px" />}
          variant="contained"
        >
          Order Now
        </Button>
      </Box>
    </Box>
  );
};

const Campaigns = () => {
  return (
    <Container>
      <Box
        sx={{
          py: "80px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <CampaignsItems />
        <CampaignsItems />
      </Box>
    </Container>
  );
};

export default Campaigns;
