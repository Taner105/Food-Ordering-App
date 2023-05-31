import { CssBaseline, Box } from "@mui/material";
import Navbar from "./Navbar";

interface IProps {
  children: JSX.Element | (JSX.Element | null)[];
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {children}
      <Box>Footer</Box>
    </>
  );
};

export default Layout;
