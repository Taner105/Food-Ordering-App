import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layouts from "../components/Layouts";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "@/redux/store";
import theme from "../components/theme";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
