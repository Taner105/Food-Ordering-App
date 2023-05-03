import { CssBaseline, Box } from "@mui/material";
import Navbar from "./Navbar";

interface IProps {
  children: JSX.Element | (JSX.Element | null)[];
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: { xs: "100%", md: "85%", xl: "65%" } }}>
          <Navbar />
          {children}
          <Box>Footer</Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
