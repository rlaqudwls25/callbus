import styled from "styled-components";
import { mixin } from "../styles/mixin";
import { theme } from "../styles/theme";

interface Props {
  value: string | number;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: any;
  disabled: boolean;
  unit: string;
  name: string;
  min: string;
  max: string;
}

const RentalInput = (props: Props) => {
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

export default RentalInput;

const InputBox = styled.div<{
  disabled: boolean;
}>`
  ${mixin.flexSet("", "center")}
  ${mixin.marginSet(1, 1, 1, 1)}
  height: 46px;
  padding: 0px 10px 0px 10px;
  border: 1px solid ${theme.blurrygray};
  background-color: ${(props) => (props.disabled ? theme.bggray : theme.white)};

  label {
    width: 75px;
    ${mixin.fontSet(theme.blurrygray, "14px", "500")}
  }
`;

const Inputs = styled.input`
  width: 45%;
  border: none;
  text-align: right;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
