import { Box } from "@mui/material";
import Image from "next/image";
const MenuItems = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", height: "160px", width: "160px" }}>
        <Image src="/pizza.webp" alt="" layout="fill" objectFit="cover" />
      </Box>
      <Box>dasd</Box>
    </Box>
  );
};

export default MenuItems;
