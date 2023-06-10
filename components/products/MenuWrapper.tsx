import Title from "../ui/Title";
import { Box, Container } from "@mui/material";
import MenuItems from "./MenuItems";

const MenuWrapper = () => {
  return (
    <Container>
      <Box className="centerXY">
        <Title propStyle={{ fontSize: "40px" }}>Our Menu</Title>
      </Box>
      <Box>Buttons</Box>
      <Box>
        <MenuItems />
      </Box>
    </Container>
  );
};

export default MenuWrapper;
