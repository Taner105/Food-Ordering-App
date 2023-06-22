import { Box, Typography } from "@mui/material";
import Image from "next/image";

const CustomerItem = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <Box sx={{ mx: 4, mt: 5 }}>
      <Box
        sx={{
          p: 6,
          bgcolor: "secondary.main",
          color: "#fff",
          borderRadius: "5px",
        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 4 }}>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Moana Michell
          </span>
          <span style={{ fontSize: "15px" }}>magna aliqua</span>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "112px",
          width: "112px",
          border: "4px solid #ffbe33",
          borderRadius: "50%",
          mt: "24px",
          ":before": {
            content: '""',
            position: "absolute",
            top: -10,
            left: 0,
            bgcolor: "#ffbe33",
            width: 25,
            height: 25,
            translate: 40,
            transform: "rotate(45deg)",
          },
        }}
      >
        <Image
          style={{ borderRadius: "50%" }}
          className="imageStyle"
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </Box>
  );
};

export default CustomerItem;
