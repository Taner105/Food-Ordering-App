import Title from "../ui/Title";
import { Box, Button, Container, Grid } from "@mui/material";
import MenuItems from "./MenuItems";
import { useEffect, useState } from "react";

const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter(
      productList.filter(
        (product) =>
          product.category === categoryList[active].title.toLowerCase()
      )
    );
  }, [categoryList, productList, active]);

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
        {filter.length > 0 &&
          filter.map((product) => (
            <MenuItems key={product._id} product={product} />
          ))}
      </Grid>
    </Container>
  );
};

export default MenuWrapper;
