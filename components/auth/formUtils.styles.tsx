import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorTag } from '../shared/index.styles';
import { TextField } from './form.styles';

// interface InputProps {
//   email: string; 
//   password: string; 
//   confirmPassword: string; 
//   username: string; 
//   phoneNumber: string;
// }

interface FormProps {
  placeholder: string;
  name: string;
  phoneNumber?: boolean;
  phoneNumberReg?: boolean;
  type: string;
  value: string;
  required: boolean;
  search?: boolean;
  // initialErrorState: object;
  // errorSetter: Dispatch<SetStateAction<InputProps>>;
  valueSetter: Dispatch<SetStateAction<string>>;
}

const RenderTextField: FC<FormProps> = ({
  placeholder,
  name,
  type,
  value,
  phoneNumber,
  phoneNumberReg,
  required,
  search,
  valueSetter,
}: FormProps) => (
  <TextField
    placeholder={placeholder}
    name={name}
    type={type}
    value={value}
    onChange={(event) => {
      valueSetter(event.target.value);
    }}
    phoneNumber={phoneNumber}
    search={search}
    phoneNumberReg={phoneNumberReg}
    required={required}
  />
);

const renderInputError = (error: string) => (
  error && <ErrorTag>{error}</ErrorTag>
);

export { RenderTextField, renderInputError };

RenderTextField.defaultProps = {
  phoneNumber: undefined,
  phoneNumberReg: undefined,
  search: undefined,
};
