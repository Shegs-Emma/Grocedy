import { FC } from "react";
import "@styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
