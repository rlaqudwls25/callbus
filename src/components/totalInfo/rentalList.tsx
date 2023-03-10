import styled from "styled-components";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { RentalPriceType } from "../../types/inputData";

const RentalList = ({ name, value, unit }: RentalPriceType) => {
  return (
    <RetalListBox>
      <RentalName>
        <RentalText>{name}</RentalText>
      </RentalName>
      <RentalName>
        <strong>{value}</strong> {unit}
      </RentalName>
    </RetalListBox>
  );
};

export default RentalList;

const RetalListBox = styled.div`
  display: flex;
  ${mixin.marginSet(6, 0, 0, 0)}

  strong {
    ${mixin.fontSet(theme.black, "16px", "700")}
  }
`;

const RentalText = styled.span`
  ${mixin.fontSet(theme.blurrygray, "16px", "700")}
`;

const RentalName = styled.div`
  width: 50%;
`;
