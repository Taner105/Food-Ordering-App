import { Box, Container, TextField } from "@mui/material";
import React from "react";

const Input = ({ input, onChange }: any) => {
  // Burdaki typescript hatası düzenlenecek!!!

  return (
    <Box>
      <TextField
        onChange={onChange}
        fullWidth
        id="outlined-basic"
        variant="outlined"
        {...input}
      />
    </Box>
  );
};

export default Input;
