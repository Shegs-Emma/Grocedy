import { FC } from "react";
import RegisterContents from "../components/auth/signup";
import Layout from "../components/Layout";

const Register: FC = () => {
  return (
    <Layout title="Grocedy | Register">
      <RegisterContents />
    </Layout>
  );
};

export default Register;
