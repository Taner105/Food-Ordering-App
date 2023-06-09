import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const CampaignsItems = () => {
  return (
    <Box
      sx={{
        bgcolor: "#222831",
        flex: 1,
        borderRadius: "16px",
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
          border: "5px solid #ffbe33",
          borderRadius: "50%",
          ":hover": {
            scale: "1.1",
          },
          transition: "all",
        }}
      >
        <Image src="/o1.webp" alt="" layout="fill" objectFit="cover" />
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
