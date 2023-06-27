import Title from "../ui/Title";
import { Box, Button, Container, Grid } from "@mui/material";
import MenuItems from "./MenuItems";
import { useState } from "react";

const MenuWrapper = ({ categoryList }) => {
  const [active, setActive] = useState(0);
  console.log(categoryList);
  return (
    <Container>
      <Box className="centerXY">
        <Title propStyle={{ fontSize: "40px" }}>Our Menu</Title>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: "15px" }}
        my="20px"
      >
        {categoryList &&
          categoryList.map((category, index) => {
            return (
              <>
                <Button
                  key={category._id}
                  onClick={() => setActive(index)}
                  type="submit"
                  sx={{
                    display: "inline-block",
                    backgroundColor: "white",
                    borderRadius: "25px",
                    color: "#000",
                    textTransform: "capitalize",
                    ...(index === active && {
                      bgcolor: "primary.main",
                      color: "#fff",
                    }),
                    mt: "25px",
                    ":hover": {
                      backgroundColor: "primary.main",
                      opacity: "70%",
                      transition: "all",
                      color: "#fff",
                    },
                  }}
                >
                  {category.title}
                </Button>
              </>
            );
          })}
      </Box>
      <Grid container spacing={4}>
        <MenuItems />
      </Grid>
    </Container>
  );
};

export default MenuWrapper;
