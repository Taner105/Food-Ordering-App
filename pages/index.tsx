import Head from "next/head";
import { Box } from "@mui/material";
import Home from "./home";
import styles from "@/styles/Home.module.css";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home Page Candle</title>
      </Head>
      <Box>
        <Home />
      </Box>
    </>
  );
}
