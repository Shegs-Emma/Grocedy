import styled from "styled-components";

interface FormProps {
  phoneNumber?: boolean;
  phoneNumberReg?: boolean;
  reg?: boolean;
  regLog?: boolean;
  dash?: boolean;
  search?: boolean;
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const MobileView = styled.div`
  width: 100%;

  @media (min-width: 52em) {
    display: none;
  }
`;

const AuthForm = styled.div<FormProps>`
  flex-basis: 100%;
  height: 100%;
  width: ${({ reg }) => (reg ? "100%" : "")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 48.062em) {
    z-index: 34;
    position: absolute;
  }

  @media (min-width: 48.063em) and (max-width: 69.938em) {
    flex-basis: 50%;
    background-color: rgb(255, 255, 255, 0.7);
  }

  @media (min-width: 70em) {
    flex-basis: 50%;
    background-color: rgb(255, 255, 255, 0.7);
  }
`;

const BgImageStyle = styled.div`
  display: none;

  @media screen and (min-width: 52em) {
    background-color: #8daa6a;
  }

  @media (min-width: 48.063em) and (max-width: 69.938em) {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100vh;
  }

  @media (min-width: 70em) {
    display: block;
    position: relative;
    width: 50%;
    height: 100vh;
  }
`;

const LogoContainer = styled.div<FormProps>`
  display: flex;
  flex-direction: row;
`;

const LogoDiv = styled.div<FormProps>`
  width: 15%;
  padding-left: 1.5rem;
  margin: 0 auto;

  @media (min-width: 48.063em) and (max-width: 69.938em) {
    margin-left: 0;
    width: ${({ reg }) => (reg ? "14%" : "20%")};
    margin: 0;
  }

  @media (min-width: 70em) {
    width: ${({ reg }) => (reg ? "9%" : "20%")};
    margin: 0;
  }
`;

const LoginForm = styled.div<FormProps>`
  margin: 1rem 1.5rem;
  width: 88%;

  @media (min-width: 47.938em) {
    margin: 0.5rem 1.5rem;
  }

  @media (min-width: 70em) {
    width: ${({ reg }) => (reg ? "90%" : "")};
    margin: ${({ reg }) => (reg ? "2rem auto" : "")};
  }
`;

const FormContainer = styled.form<FormProps>`
  width: 100%;

  @media (min-width: 70em) {
    width: ${({ reg }) => (reg ? "90%" : "100%")};
    margin: ${({ reg }) => (reg ? "0 auto" : "")};
  }
`;

const RegisterDiv = styled.div`
  margin: 1.5rem auto 2rem auto;

  border: none;

  @media (min-width: 48.063em) and (max-width: 69.938em) {
    width: 34.75rem;
    margin: 1.5rem auto 2rem auto;
    border: 1px solid rgba(150, 20, 132, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 10px 5px #ffdcfa;
    border-radius: 10px;
  }

  @media (min-width: 70em) {
    width: 34.75rem;
    margin: -1.5rem auto 2rem auto;
    border: 1px solid rgba(150, 20, 132, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 10px 5px #ffdcfa;
    border-radius: 10px;
  }
`;

const FormFields = styled.div<FormProps>`
  display: flex;
  flex-direction: ${({ dash }) => (dash ? "row" : "column")};
  width: 100%;
`;

const TextField = styled.input.attrs({
  autoComplete: "off",
})<FormProps>`
  outline: none;
  border: 1px solid #ebebeb;
  font-family: "Montserrat", sans-serif;
  padding: 6px 17px 6px 10%;
  width: 100%;
  height: 2.8125rem;
  display: block;
  box-sizing: border-box;
  border-radius: 0.625rem;
  margin-bottom: 15px;

  font-style: normal;
  font-weight: normal;
  font-size: 0.8125rem;
  line-height: 1.0625rem;

  &:focus {
    border: 1px solid #8daa6a;
  }

  @media (min-width: 52em) {
    border: 1px solid #ebebeb;
  }
`;

const Demacator = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const Illustrate = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 20% auto 0 auto;
`;

const SvgIllustrate = styled.div``;

const Show = styled.span`
  position: absolute;
  z-index: 90;
  margin: -2.8rem 0 0 18rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  letter-spacing: 0.1em;

  /* Gray 3 */
  color: #828282;
  cursor: pointer;

  /* @media (min-width: 47.938em) {
    margin: -2.8rem 0 0 30rem;
  } */

  @media screen and (min-width: 52em) {
    margin: -2.8rem 0 0 25rem;
  }

  @media (min-width: 48.063em) and (max-width: 69.938em) {
    margin: -2.8rem 0 0 23rem;
  }

  @media (min-width: 70em) {
    margin: -2.8rem 0 0 30rem;
  }
`;

export {
  LoginContainer,
  RegisterContainer,
  AuthForm,
  BgImageStyle,
  LogoContainer,
  LogoDiv,
  LoginForm,
  FormContainer,
  FormFields,
  TextField,
  RegisterDiv,
  MobileView,
  Demacator,
  Illustrate,
  SvgIllustrate,
  Show,
};
