import React, { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { BsPersonFill } from "react-icons/bs";
import dp from "../../../public/assets/grocedy_dp.svg";
import { IoMdLock } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import SvgSide from "../../../public/assets/SvgSide.svg";
import { AnyRow } from "../../shared/index.styles";
import { P, H2, Span } from "../../typography";
import Button from "../../ui/button";
import {
  RegisterContainer,
  BgImageStyle,
  AuthForm,
  LogoContainer,
  LogoDiv,
  LoginForm,
  FormContainer,
  FormFields,
  Illustrate,
  SvgIllustrate,
  Demacator,
  Show,
} from "../form.styles";
import { RenderTextField } from "../formUtils.styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { createUser } from "../../../store/slices/authSlice";

const Register: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visibility, setVisibility] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const InputType: string = visibility ? "text" : "password";

  const viewer = () => {
    const toggle = !visibility;

    setVisibility(toggle);
  };

  const redirect = async (location: string) => {
    switch (location) {
      case "login":
        await router.push({
          pathname: `/`,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = [
      {
        sql_ref_no: 5,
        user_first_name: firstName,
        user_last_name: lastName,
        user_email_address: email,
        user_password: password,
        sql_option: 1,
      },
    ];

    const toastId = toast.loading("⏳ Loading");
    dispatch(createUser(JSON.stringify(payload)))
      .unwrap()
      .then(() => {
        toast.success("Welcome to Grocedy", { id: toastId });
      })
      .catch((err) => {
        toast.error("Invalid Credentials", { id: toastId });

        return err;
      });
  };

  return (
    <RegisterContainer>
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
              <H2 log>Register</H2>
            </AnyRow>
            <AnyRow buy>
              <P lg>Enter your details to start using Grocedy</P>
            </AnyRow>

            {/* The Form itself */}
            <FormContainer onSubmit={handleSubmit}>
              <AnyRow pass>
                <FormFields>
                  <AnyRow>
                    <P login>
                      First Name <Span register>*Required</Span>
                    </P>
                  </AnyRow>
                  <AnyRow inputSides>
                    <BsPersonFill className="login" />
                    <RenderTextField
                      placeholder="Enter your first name"
                      name="firstName"
                      type="text"
                      value={firstName}
                      valueSetter={setFirstName}
                      required
                    />
                  </AnyRow>
                </FormFields>
              </AnyRow>

              <AnyRow pass>
                <FormFields>
                  <AnyRow>
                    <P login>
                      Last Name <Span register>*Required</Span>
                    </P>
                  </AnyRow>
                  <AnyRow inputSides>
                    <BsPersonFill className="login" />
                    <RenderTextField
                      placeholder="Enter your last name"
                      name="lastName"
                      type="text"
                      value={lastName}
                      valueSetter={setLastName}
                      required
                    />
                  </AnyRow>
                </FormFields>
              </AnyRow>
              {/* Email Input field */}
              <AnyRow pass>
                <FormFields>
                  <AnyRow>
                    <P login>
                      Email Address <Span register>*Required</Span>
                    </P>
                  </AnyRow>
                  <AnyRow inputSides>
                    <FaEnvelope className="login" />
                    <RenderTextField
                      placeholder="Enter your email address"
                      name="email"
                      type="email"
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
                <Button>CREATE AN ACCOUNT</Button>
              </AnyRow>
            </FormContainer>
          </LoginForm>

          <AnyRow acc>
            <P acc>
              By clicking on <Span more>Create an Account</Span>, I agree to the
              Terms and Conditions of Grocedy
            </P>
            <P acc>
              Don&apos;t have an account?
              <Span
                acc
                onClick={() => {
                  return toast.promise(redirect("login"), {
                    loading: "loading...",
                    success: () => `Done!`,
                    error: (err) =>
                      `An error occcured while loading page ${err.toString()}`,
                  });
                }}
              >
                LOG IN
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
    </RegisterContainer>
  );
};

export default Register;
