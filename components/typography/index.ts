import styled from "styled-components";

interface StyleProps {
  lg?: boolean;
  rmb?: boolean;
  acc?: boolean;
  reg?: boolean;
  register?: boolean;
  join?: boolean;
  log?: boolean;
  dash?: boolean;
  dashCat?: boolean;
  deal?: boolean;
  cov?: boolean;
  chat?: boolean;
  rev?: boolean;
  handle?: boolean;
  revDet?: boolean;
  cate?: boolean;
  cateN?: boolean;
  prd?: boolean;
  icon?: boolean;
  ven?: boolean;
  carou?: boolean;
  start?: boolean;
  svg?: boolean;
  login?: boolean;
  more?: boolean;
}

const H2 = styled.h2<StyleProps>`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2.0625rem;
  line-height: 40px;
  text-align: left;
  color: #aaaaaa;
  text-align: left;

  @media (min-width: 52em) {
    text-align: left;
  }
`;

const H3 = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 28px;
  margin-left: 0.4rem;
  letter-spacing: -0.3px;
  color: #7c7c7c;
  opacity: 0.8;
`;

const P = styled.p<StyleProps>`
  color: #46454a;
  color: ${({ svg }) => (svg ? "#ffffff" : "")};
  color: ${({ acc }) => (acc ? "#515153" : "")};
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-weight: ${({ svg }) => (svg ? "800" : "")};
  font-size: 14px;
  font-size: ${({ acc }) => (acc ? "16px" : "")};
  font-size: ${({ lg }) => (lg ? "16px" : "")};
  font-size: ${({ svg }) => (svg ? "23px" : "")};
  line-height: 1.25rem;
  text-align: ${({ svg }) => (svg ? "center" : "")};
  display: ${({ log }) => (log ? "none" : "")};
  color: ${({ login }) => (login ? "#626264" : "")};
  margin: ${({ acc }) => (acc ? "1rem 0" : "")};

  @media (min-width: 52em) {
    width: ${({ svg }) => (svg ? "100%" : "")};
    display: ${({ log }) => (log ? "block" : "")};
    color: ${({ chat }) => (chat ? "#0077FF" : "")};
    margin: 0.1rem 0 0 0.5rem;
    margin: ${({ acc }) => (acc ? "1rem 0" : "")};
  }
`;

const Span = styled.span<StyleProps>`
  color: #8daa6a;
  color: ${({ register }) => (register ? "#CCCCCE" : "")};
  color: ${({ more }) => (more ? "black" : "")};
  cursor: ${({ acc }) => (acc ? "pointer" : "")};
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-weight: ${({ acc }) => (acc ? "400" : "")};
  font-weight: ${({ register }) => (register ? "500" : "")};
  font-size: ${({ register }) => (register ? "14px" : "")};
  margin-left: ${({ acc }) => (acc ? ".5rem" : "")};
  line-height: ${({ more }) => (more ? "19.5px" : "")};

  @media (min-width: 52em) {
    color: ${({ acc }) => (acc ? "#8DAA6A" : "")};
  }
`;

export { P, H2, H3, Span };
