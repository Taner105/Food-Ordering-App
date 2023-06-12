import { Box, Container, TextField } from "@mui/material";
import React from "react";

const Input = () => {
  return (
    <Container>
      <Box mt={10} mb={10}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
      </Box>
    </Container>
  );
};

export default Input;
