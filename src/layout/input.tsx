import styled from "styled-components";
import { mixin } from "../styles/mixin";
import { theme } from "../styles/theme";

interface Props {
  value: string | number;
  type: string;
  children?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: any;
  disabled: boolean;
  unit: string;
  name: string;
  min: string;
  max: string;
}

const Input = (props: Props) => {
  const { type, onChange, value, id, disabled, unit, name, max, min } = props;

  return (
    <InputBox disabled={disabled}>
      <label>{name}</label>
      <Inputs
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        max={max}
        min={min}
        disabled={disabled}
      />
      <span>{unit}</span>
    </InputBox>
  );
};

export default Input;

const InputBox = styled.div<{
  disabled: boolean;
}>`
  ${mixin.flexSet("space-between", "center")}
  height: 46px;
  padding: 12px;

  border: 1px solid ${theme.blurrygray};

  label {
    width: 80px;
    ${mixin.fontSet(theme.blurrygray, "14px", "500")}
    font-family: "Apple SD Gothic Neo";
  }

  background-color: ${(props) => (props.disabled ? theme.bggray : theme.white)};
`;

const Inputs = styled.input`
  width: 30%;
  border: none;
  text-align: right;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
