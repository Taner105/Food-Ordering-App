import { Box } from "@mui/material";
import MenuWrapper from "../../components/products/MenuWrapper";
import React from "react";
import axios from "axios";

const Index = ({ categoryList }) => {
  return (
    <Box sx={{ py: 10 }}>
      <MenuWrapper categoryList={categoryList} />
    </Box>
  );
};
export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      categoryList: res.data ? res.data : [],
    },
  };
};

export default Index;
