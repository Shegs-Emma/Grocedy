import { FC, MouseEventHandler, ReactNode } from 'react';
import { ButtonContainer } from './button.styles';

interface IProps {
  children: ReactNode;
  clicked?: MouseEventHandler<HTMLButtonElement>;
  ven?: boolean
  start?: boolean
}

const Button: FC<IProps> = ({ children, clicked, ven, start}: IProps) => (
  <ButtonContainer onClick={clicked} ven={ven} start={start}>{children}</ButtonContainer>
);

export default Button;

Button.defaultProps = {
  clicked: undefined,
  ven: undefined,
  start: undefined
};
