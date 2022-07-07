import styled from "styled-components";

interface StyleProps {
  ven?: boolean;
  start?: boolean;
}

const ButtonContainer = styled.button<StyleProps>`
  outline: none;
  cursor: pointer;
  padding: 9px 15px;
  /* padding: ${({ ven }) => (ven ? "1px 1px" : "")}; */
  width: 100%;
  height: 50px;
  font-family: "Montserrat", sans-serif;
  border: 1px solid #ffffff;
  margin-top: 5%;

  background: #8daa6a;
  color: #ffffff;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  border-radius: 6px;

  &:hover,
  &:active {
    color: #ffffff;
    outline: none;
  }
`;

export { ButtonContainer };
