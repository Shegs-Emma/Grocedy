import { FC } from 'react';
import Image from 'next/image';
import tick from '../../../public/assets/tick.svg';
import { P } from '../../typography';
import { Check, Ticker } from './checkbox.styles';

interface Props {
  isChecked: boolean;
  //   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: () => void;
  label: string;
  reg?: boolean;
}

const Checkbox: FC<Props> = ({ reg, label, isChecked, handleChange }: Props) => {
  return (
    <Check reg={reg}>
      <P rmb>{label}</P>
      <span onClick={handleChange} aria-hidden="true">
        <input
          type="checkbox"
          id={label}
          checked={isChecked}
          readOnly
          // onChange={props.handleChange}
        />
        <span>
          {isChecked ? (
            <Ticker>
              <Image src={tick} alt="Tick" />
            </Ticker>
          ) : (
            ''
          )}
        </span>
      </span>
    </Check>
  );
};
export default Checkbox;

Checkbox.defaultProps = {
  reg: undefined,
};
