import { Box } from "@mui/material";
import MenuWrapper from "../../components/products/MenuWrapper";
import React from "react";
import axios from "axios";

const Index = ({ categoryList, productList }) => {
  console.log("productList", productList);
  return (
    <Box sx={{ py: 10 }}>
      <MenuWrapper categoryList={categoryList} productList={productList} />
    </Box>
  );
};
export const getServerSideProps = async () => {
  const category = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  return {
    props: {
      categoryList: category.data ? category.data : [],
      productList: product.data ? product.data : [],
    },
  };
};

export default Index;
