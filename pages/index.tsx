import { FC } from "react";
import LoginContents from "../components/auth/login";
import Layout from "../components/Layout";

const Login: FC = () => {
  return (
    <Layout title="Grocedy | Login">
      <LoginContents />
    </Layout>
  );
};

export default Login;
