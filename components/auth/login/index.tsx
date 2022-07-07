import React, { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { IoMdLock } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import SvgSide from "../../../public/assets/SvgSide.svg";
import dp from "../../../public/assets/grocedy_dp.svg";
import { AnyRow } from "../../shared/index.styles";
import { P, H2, Span } from "../../typography";
import Button from "../../ui/button";
import {
  LoginContainer,
  BgImageStyle,
  AuthForm,
  LogoContainer,
  LogoDiv,
  LoginForm,
  FormContainer,
  FormFields,
  Demacator,
  Illustrate,
  SvgIllustrate,
  Show,
} from "../form.styles";
import { RenderTextField } from "../formUtils.styles";
import { loginUser } from "../../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visibility, setVisibility] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const InputType: string = visibility ? "text" : "password";

  const viewer = () => {
    setVisibility(!visibility);
  };

  const redirect = async (location: string) => {
    switch (location) {
      case "register":
        await router.push({
          pathname: `/register`,
        });
        break;
      case "dashboard":
        await router.push({
          pathname: `/dashboard`,
        });
        break;
      default:
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = [
      {
        sql_ref_no: 2,
        email_address: email,
        user_password: password,
        sql_option: 1,
      },
    ];

    const toastId = toast.loading("⏳ Loading");
    dispatch(loginUser(JSON.stringify(payload)))
      .unwrap()
      .then((res) => {
        console.log("res", res[0].Message_Type);
        if (res[0].Message_Type) {
          toast.error("Invalid Credentials", { id: toastId });
        }

        if (!res[0].Message_Type) {
          toast.success(`Welcome back to Grocedy`, {
            id: toastId,
          });
        }
      })
      .catch((err) => {
        toast.error("Invalid Credentials", { id: toastId });

        return err;
      });
  };

  return (
    <LoginContainer>
      {/* This is the left side of the page, containing the form */}
      <AuthForm>
        <Demacator>
          {/* The Logo */}
          <LogoContainer>
            <LogoDiv>
              <Image src={dp} alt="Logo" />
            </LogoDiv>
          </LogoContainer>

          {/* The Text before the form */}
          <LoginForm>
            <AnyRow com>
              <H2 log>Welcome!</H2>
            </AnyRow>
            <AnyRow buy>
              <P lg>Enter your details to start using Grocedy</P>
            </AnyRow>

            {/* The Form itself */}
            <FormContainer onSubmit={handleSubmit}>
              {/* Email Input field */}
              <AnyRow pass>
                <FormFields>
                  <AnyRow>
                    <P login>Email Address</P>
                  </AnyRow>
                  <AnyRow inputSides>
                    <FaEnvelope className="login" />
                    <RenderTextField
                      placeholder="Enter your email address"
                      name="email"
                      type="text"
                      value={email}
                      valueSetter={setEmail}
                      required
                    />
                  </AnyRow>
                </FormFields>
              </AnyRow>

              {/* The Password */}
              <AnyRow pass>
                <FormFields>
                  <AnyRow>
                    <P login>Password</P>
                  </AnyRow>
                  <AnyRow inputSides>
                    <IoMdLock className="login" />
                    <RenderTextField
                      placeholder="Password"
                      name="password"
                      type={InputType}
                      value={password}
                      valueSetter={setPassword}
                      required
                    />
                  </AnyRow>
                </FormFields>
                <span onClick={viewer} aria-hidden="true">
                  <Show>View</Show>
                </span>
              </AnyRow>

              {/* Button */}
              <AnyRow signBtn>
                <Button>LOG IN</Button>
              </AnyRow>
            </FormContainer>
          </LoginForm>

          <AnyRow acc>
            <P acc>Forgot Password</P>
            <P acc>
              Don&apos;t have an account?
              <Span
                acc
                onClick={() => {
                  return toast.promise(redirect("register"), {
                    loading: "loading...",
                    success: () => `Done!`,
                    error: (err) =>
                      `An error occcured while loading page ${err.toString()}`,
                  });
                }}
              >
                REGISTER
              </Span>
            </P>
          </AnyRow>
        </Demacator>
      </AuthForm>

      <BgImageStyle>
        <Illustrate>
          <SvgIllustrate>
            <Image src={SvgSide} alt="svgside" />
          </SvgIllustrate>
          <P svg>Welcome to Grocedy</P>
        </Illustrate>
      </BgImageStyle>
    </LoginContainer>
  );
};

export default Login;
