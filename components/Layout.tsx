import { FC, ReactNode } from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { LayoutContainer } from "./Layout.styles";

interface LayoutProp {
  children: ReactNode;
  title: string;
}

const Layout: FC<LayoutProp> = ({ children, title }: LayoutProp) => {
  return (
    <LayoutContainer>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1"
        />
      </Head>

      {children}

      <Toaster
        toastOptions={{
          // Define default options
          style: {
            marginTop: "5.5rem",
            background: "#363636",
            color: "#fff",
            zIndex: 1,
          },
          duration: 5000,
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </LayoutContainer>
  );
};

export default Layout;
