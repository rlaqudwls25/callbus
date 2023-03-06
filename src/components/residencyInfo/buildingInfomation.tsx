import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecoilState, useRecoilState } from "recoil";
import styled from "styled-components";
import BuildingInfoInput from "../../layout/buildingInfoInput";
import { BuildingInfoData } from "../../mock/data";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { BuildingInfoType } from "../../types/inputData";
import { buildingInfoState } from "../recoils/buildingInfo";

const BuildingInfomation = () => {
  const [buildingInfoList, setBuildingInfoList] =
    useState<BuildingInfoType[]>(BuildingInfoData);
  const [saveBulingInfo, setSaveBulingInfo] = useRecoilState(buildingInfoState);
  const navigate = useNavigate();

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    const updateValue = buildingInfoList.map((item) =>
      item.id === Number(id) ? { ...item, value } : item
    );

    setBuildingInfoList(updateValue);
  };

  const onComplete = () => {
    setSaveBulingInfo(buildingInfoList);
    navigate("/complete");
  };

  return (
    <BuildingInfoContainer>
      <BuildingInfoWrapper>
        <BuildingInfoBox>
          {buildingInfoList.map((item) => {
            const { id, type, value, name, placeholder } = item;

            return (
              <BuildingInfoInput
                key={id}
                itemId={id}
                name={name}
                type={type}
                value={value}
                onChange={handleValue}
                placeholder={placeholder}
              />
            );
          })}
          <CompleteBtn onClick={onComplete}>
            <span>완료</span>
          </CompleteBtn>
        </BuildingInfoBox>
      </BuildingInfoWrapper>
    </BuildingInfoContainer>
  );
};

export default BuildingInfomation;

const BuildingInfoContainer = styled.section`
  ${mixin.marginSet(24, 0, 0, 0)}
`;

const BuildingInfoWrapper = styled.div``;

const BuildingInfoBox = styled.div`
  label {
    ${mixin.marginSet(0, 0, 4, 0)}
  }
`;

// const BuildingInfoInput = styled.input`
//   width: 100%;
//   height: 46px;
//   ${mixin.paddingSet(0, 0, 0, 10)}
// `;

// const ContractInfoBox = styled.div`
//   ${mixin.marginSet(0, 0, 24, 0)}
// `;

// const ContractWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   margin: 24px 0px 0px 0px;
// `;

// const ContractSpace = styled.div`
//   ${mixin.flexSet("", "", "column")}
// `;

// const PhoneNumberBox = styled(ContractSpace)``;

// const NoticeTest = styled.span`
//   ${mixin.fontSet(theme.gray, "12px", "400")}
//   line-height: 2;
// `;

const CompleteBtn = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${theme.blue};
  ${mixin.marginSet(24, 0, 0, 0)}

  span {
    ${mixin.fontSet(theme.white, "16px", "700")}
  }
`;
