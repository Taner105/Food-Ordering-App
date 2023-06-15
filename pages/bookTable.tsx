import Reservation from "../components/Reservation";
import React from "react";
import { Box } from "@mui/material";

const bookTable = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Reservation />
    </Box>
  );
};

export default bookTable;
