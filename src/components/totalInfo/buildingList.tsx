import styled from "styled-components";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { BuildingInfoType } from "../../types/inputData";

const BuildingList = ({ value, name }: BuildingInfoType) => {
  return (
    <BuildingBox>
      <div>
        <span>{name} : </span>
        <strong>{value}</strong>
      </div>
    </BuildingBox>
  );
};

export default BuildingList;

const BuildingBox = styled.div`
  ${mixin.flexSet("", "center")}
  ${mixin.marginSet(6, 0, 0, 0)}
  span {
    ${mixin.fontSet(theme.gray, "14px", "700")}
  }

  strong {
    ${mixin.fontSet(theme.black, "16px", "700")}
  }
`;

// const Adress = styled.div``;

// const DateBox = styled.div``;

// const StartDate = styled.div``;

// const EndDate = styled(StartDate)``;
