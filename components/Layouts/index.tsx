import { CssBaseline, Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: JSX.Element | (JSX.Element | null)[];
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
