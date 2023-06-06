import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  propStyle?: React.CSSProperties;
}

const Title = ({ children, propStyle }: TitleProps) => {
  return (
    <Box sx={{ fontWeight: "bold" }} style={propStyle}>
      {children}
    </Box>
  );
};

export default Title;
