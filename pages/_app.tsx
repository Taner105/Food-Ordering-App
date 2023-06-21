import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layouts from "../components/Layouts";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Provider>
  );
}
