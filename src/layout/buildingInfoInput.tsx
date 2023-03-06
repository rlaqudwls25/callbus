import styled from "styled-components";
import { mixin } from "../styles/mixin";
import { theme } from "../styles/theme";

interface Props {
  value: string | number;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  itemId: number;
  name: string;
}

const BuildingInfoInput = (props: Props) => {
  const { type, onChange, value, itemId, name, placeholder } = props;

  return (
    <InputBox itemId={itemId}>
      <label>{name}</label>
      <Inputs
        id={String(itemId)}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputBox>
  );
};

export default BuildingInfoInput;

const InputBox = styled.div<{ itemId: number }>`
  ${mixin.flexSet("", "", "column")}
  ${mixin.marginSet(0, 0, 24, 0)}
`;

const Inputs = styled.input`
  height: 48px;
  ${mixin.paddingSet(0, 0, 0, 8)}
`;
