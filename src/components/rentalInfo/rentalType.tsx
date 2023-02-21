import { useState } from "react";
import styled from "styled-components";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { TabType } from "../../mock/data";

const RentalType = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const handleChangeType = (id: number) => {
    setCurrentIdx(id);
  };

  return (
    <RentalInfoContainer>
      <RantalSubTitleBox>
        <span>
          전월세 비용을 입력하시면 <br /> 내 월세 환급금을 알려드려요 👇
        </span>
      </RantalSubTitleBox>
      <span>임대 유형</span>
      <RentalTypeBox>
        {TabType.map((item) => {
          const { id, typeName } = item;
          return (
            <TypeName
              key={id}
              currentIdx={currentIdx === id}
              typeName={typeName}
              onClick={() => handleChangeType(id)}
            >
              {typeName}
            </TypeName>
          );
        })}
      </RentalTypeBox>
    </RentalInfoContainer>
  );
};

export default RentalType;

const RentalInfoContainer = styled.div``;

const RantalSubTitleBox = styled.div`
  span {
    ${mixin.fontSet(theme.black, "20px", "700")}
    font-family: Apple SD Gothic Neo;
    text-align: left;
  }
  margin-bottom: 73px;
`;

const RentalTypeBox = styled.div`
  ${mixin.flexSet("center", "center")}
`;

const TypeName = styled.li<{ currentIdx: boolean; typeName: string }>`
  width: 50%;
  height: 44px;
  border: 1px solid ${theme.blurrygray};
  ${mixin.flexSet("center", "center")}
  cursor: pointer;
  background-color: ${(props) => props.currentIdx && theme.blue};
  border-radius: ${(props) =>
    props.typeName === "월세" ? "3px 0px 0px 3px" : "0px 3px 3px 0px"};
  border-left: ${(props) => props.typeName === "전세" && "none"};
`;
