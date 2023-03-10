import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { buildingInfoState } from "../recoils/buildingInfo";
import { rentalRefundState, rentalTypeNameState } from "../recoils/rentalInfo";
import BuildingList from "./buildingList";
import RentalList from "./rentalList";

const TotalList = () => {
  const buildingData = useRecoilValue(buildingInfoState);
  const rentalData = useRecoilValue(rentalRefundState);
  const rentalTypeName = useRecoilValue(rentalTypeNameState);

  const buildingFilterData = buildingData.filter((item) => item.show === true);

  const startDate = buildingFilterData.map((item) => item.value).slice(1, 2);
  const endDate = buildingFilterData.map((item) => item.value).slice(2, 3);

  const totalPrice = rentalData
    .filter((item) => item.id === 2 || item.id == 3)
    .map((item) => item.value)
    .reduce((res, cur) => Number(res) + Number(cur), 0);

  return (
    <TotalListContainer>
      <BuildingBox>
        <img src="/static/images/house.png" alt="house" />
        {buildingFilterData.map((item) => (
          <BuildingList {...item} />
        ))}
      </BuildingBox>

      <BorderBottom />

      <RentalBox>
        {rentalData.map((item) => (
          <RentalList {...item} />
        ))}
      </RentalBox>
      <RentalSingleBox>
        <Title>임대유형</Title>
        <Contents>{rentalTypeName}</Contents>
        <Title>납부총액</Title>
        <Contents>{totalPrice}만원</Contents>
      </RentalSingleBox>

      <BorderBottom />

      <Date>
        <Title>계약 기간 </Title>
        <Contents>
          {startDate} ~ {endDate}
        </Contents>
      </Date>
    </TotalListContainer>
  );
};

export default TotalList;

const TotalListContainer = styled.section``;

const BuildingBox = styled.div`
  ${mixin.flexSet("", "center")}
`;

const Date = styled.div`
  padding: 10px;
`;

const Title = styled.span`
  ${mixin.fontSet(theme.blurrygray, "16px", "700")}
  ${mixin.marginSet(0, 4, 0, 0)}
`;

const Contents = styled.span`
  ${mixin.fontSet(theme.black, "16px", "400")}
`;

const BorderBottom = styled.div`
  width: 100%;
  ${mixin.borderSet(0.01, "solid", theme.blurrygray)}
  ${mixin.marginSet(16, 0, 16, 0)}
`;

const RentalBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const RentalSingleBox = styled.div`
  ${mixin.marginSet(6, 0, 0, 0)}
`;
