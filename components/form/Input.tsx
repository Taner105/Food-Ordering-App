import { Box, Container, TextField } from "@mui/material";
import React from "react";

const Input = ({ input, onChange }: any) => {
  // Burdaki typescript hatası düzenlenecek!!!

  console.log(input);
  return (
    <Box>
      <TextField
        sx={{
          border: input.errorsMessage ? "2px solid red" : "1px solid #ffbe83",
        }}
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
