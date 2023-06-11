import Title from "../ui/Title";
import { Box, Container, Grid } from "@mui/material";
import MenuItems from "./MenuItems";

const MenuWrapper = () => {
  return (
    <Container>
      <Box className="centerXY">
        <Title propStyle={{ fontSize: "40px" }}>Our Menu</Title>
      </Box>
      <Box>Buttons</Box>
      <Grid container spacing={4}>
        <MenuItems />
      </Grid>
    </Container>
  );
};

export default MenuWrapper;
