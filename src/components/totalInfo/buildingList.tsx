import styled from "styled-components";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { BuildingInfoType } from "../../types/inputData";

const BuildingList = ({ id, value }: BuildingInfoType) => {
  const rensidencyData = id === 1 && value;

  return (
    <BuildingListBox itemId={id}>
      <BuildingWrapper>
        <ResidencyText itemId={id}>{rensidencyData}</ResidencyText>
      </BuildingWrapper>
    </BuildingListBox>
  );
};

export default BuildingList;

const BuildingListBox = styled.div<{ itemId: number }>`
  ${mixin.flexSet("", "center")}
  ${mixin.marginSet(6, 0, 0, 0)}

  div {
    text-align: ${(props) => (props.itemId === 1 ? "center" : "")};
  }
`;

const BuildingWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ResidencyText = styled.span<{ itemId: number }>`
  font-size: ${(props) => (props.itemId === 1 ? "24px" : "16px")};
  ${mixin.marginSet(0, 0, 0, 8)}
`;
