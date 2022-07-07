import styled from "styled-components";

interface StyleProps {
  rmb?: boolean;
  acc?: boolean;
  pass?: boolean;
  com?: boolean;
  reg?: boolean;
  joinPhn?: boolean;
  accReg?: boolean;
  buy?: boolean;
  dash?: boolean;
  rev?: boolean;
  cateN?: boolean;
  cateS?: boolean;
  signBtn?: boolean;
  inputSides?: boolean;
  register?: boolean;
}

const ErrorTag = styled.small`
  text-align: left;
  display: block;
  color: tomato;
  padding-left: 1.5rem;
`;

const AnyRow = styled.div<StyleProps>`
  width: 100%;
  width: ${({ acc }) => (acc ? "90%" : "")};
  padding: ${({ register }) => (register ? "0 0 0 1.5rem" : "")};
  text-align: left;
  padding-left: ${({ acc }) => (acc ? ".5rem" : "")};
  margin: 0 0 0.5rem 0;
  margin: ${({ inputSides }) => (inputSides ? "0" : "")};
  margin: ${({ acc }) => (acc ? ".1rem 0 0 0" : "")};
  margin: ${({ buy }) => (buy ? "0 0 2rem 0" : "")};
  display: ${({ inputSides }) => (inputSides ? "flex" : "")};

  @media screen and (min-width: 52em) {
    margin: ${({ acc }) => (acc ? ".1rem 0 0 1.5rem" : "")};
    padding: 0;
    padding: ${({ register }) => (register ? "0 0 0 1.5rem" : "")};
  }

  @media (min-width: 47.938em) {
    margin: ${({ acc }) => (acc ? ".1rem 0 0 1.5rem" : "")};
  }

  @media (min-width: 48.063em) and (max-width: 69.938em) {
    margin: ${({ acc }) => (acc ? ".1rem 0 0 1.5rem" : "")};
    margin: ${({ accReg }) => (accReg ? "2.5rem 0 0.5rem 0" : "")};
  }

  @media (max-width: 25.813em) {
    margin-bottom: ${({ com }) => (com ? "0.5rem" : "")};
  }

  @media (min-width: 70em) {
    width: ${({ reg }) => (reg ? "45%" : "")};
    margin: ${({ reg }) => (reg ? "0 auto" : "")};
    position: ${({ reg }) => (reg ? "relative" : "")};
    top: ${({ reg }) => (reg ? "-2.5rem" : "")};

    display: ${({ buy }) => (buy ? "block" : "")};
    margin-top: ${({ acc }) => (acc ? "0" : "")};
  }
`;

const AbsoRow = styled.div<StyleProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  z-index: 22;
  left: 10%;
  margin-top: -0.3rem;

  @media (min-width: 52em) {
    left: ${({ reg }) => (reg ? "20%" : "3%")};
  }

  @media (min-width: 48.063em) and (max-width: 69.938em) {
    left: ${({ reg }) => (reg ? "7%" : "4%")};
  }

  @media (min-width: 70em) {
    left: ${({ reg }) => (reg ? "20%" : "3%")};
  }
`;

const Hr = styled.hr<StyleProps>`
  width: ${({ rev }) => (rev ? "100%" : "90%")};
  border: 1px solid rgba(29, 29, 29, 0.3);
  margin: ${({ rev }) => (rev ? "0.2rem auto" : "2rem auto")};
`;

export { ErrorTag, AnyRow, AbsoRow, Hr };
