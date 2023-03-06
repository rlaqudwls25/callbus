import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";
import { buildingInfoState } from "../recoils/buildingInfo";
import { rentalRefundState } from "../recoils/rentalInfo";
import BuildingList from "./buildingList";
import RentalList from "./rentalList";

const TotalInfo = () => {
  const buildingData = useRecoilValue(buildingInfoState);
  const rentalData = useRecoilValue(rentalRefundState);

  const buildingFilterData = buildingData.filter(
    (item) => item.id === 1 || item.id === 4 || item.id === 5
  );

  return (
    <TotalInfoContainer>
      {buildingFilterData.map((item) => (
        <BuildingList {...item} />
      ))}
      {rentalData.map((item) => (
        <RentalList {...item} />
      ))}
    </TotalInfoContainer>
  );
};

export default TotalInfo;

const TotalInfoContainer = styled.section``;
