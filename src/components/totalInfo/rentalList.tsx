import styled from "styled-components";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { RentalPriceType } from "../../types/inputData";

const RentalList = ({ name, value, unit }: RentalPriceType) => {
  return (
    <RetalListBox>
      <div>
        <span>{name} : </span>
        <strong>{value}</strong> {unit}
      </div>
    </RetalListBox>
  );
};

export default RentalList;

const RetalListBox = styled.div`
  ${mixin.flexSet("", "center")}
  ${mixin.marginSet(6, 0, 0, 0)}

    span {
    ${mixin.fontSet(theme.gray, "14px", "700")}
  }

  strong {
    ${mixin.fontSet(theme.black, "16px", "700")}
  }
`;
