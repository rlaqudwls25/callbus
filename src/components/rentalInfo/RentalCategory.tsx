import styled from "styled-components";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { RentalType } from "../../mock/data";
import RentalForm from "./rentalForm";
import { useRecoilState } from "recoil";
import { rentalTypeNameState } from "../recoils/rentalInfo";

const RentalCategory = () => {
  const [rentalTypeName, setRentalTypeName] =
    useRecoilState(rentalTypeNameState);

  const handleChangeType = (typeName: string) => {
    setRentalTypeName(typeName);
  };

  return (
    <RentalInfoContainer>
      <RantalSubTitleBox>
        <span>
          전월세 비용을 입력하시면 <br /> 내 월세 환급금을 알려드려요 👇
        </span>
      </RantalSubTitleBox>
      <SubtitleText>
        <span>임대 유형</span>
      </SubtitleText>
      <RentalTypeBox>
        {RentalType.map((item) => {
          const { id, typeName } = item;
          return (
            <TypeName
              key={id}
              rentalTypeName={rentalTypeName === typeName}
              typeName={typeName}
              onClick={() => handleChangeType(typeName)}
            >
              {typeName}
            </TypeName>
          );
        })}
      </RentalTypeBox>
      <Rentalnofify>
        <SubtitleText>
          <span>임대비용</span>
        </SubtitleText>
        <ExplainText>
          <img src="/static/images/notification.png" alt="알림사항" />
          <span>천원 단위는 5.5처럼 소수점 첫째자리까지 입력해주세요.</span>
        </ExplainText>
        <ExplainText>
          <img src="/static/images/notification.png" alt="알림사항" />
          <span>비용 입력시 고지서가 무료로 제공됩니다.</span>
        </ExplainText>
      </Rentalnofify>
      <RentalForm />
    </RentalInfoContainer>
  );
};

export default RentalCategory;

const RentalInfoContainer = styled.section``;

const RantalSubTitleBox = styled.div`
  span {
    ${mixin.fontSet(theme.black, "20px", "700")}
    font-family: Apple SD Gothic Neo;
    text-align: left;
    line-height: 1.7;
  }
  ${mixin.marginSet(0, 0, 50, 0)}
`;

const RentalTypeBox = styled.div`
  ${mixin.flexSet("center", "center")}
`;

const TypeName = styled.li<{ rentalTypeName: boolean; typeName: string }>`
  ${mixin.flexSet("center", "center")}
  width: 50%;
  height: 44px;
  background-color: ${(props) => props.rentalTypeName && theme.blue};
  border-radius: ${(props) =>
    props.typeName === "월세" ? "3px 0px 0px 3px" : "0px 3px 3px 0px"};
  border-left: ${(props) => props.typeName === "전세" && "none"};
  border: 1px solid ${theme.blurrygray};
  cursor: pointer;
  color: ${(props) => (props.rentalTypeName ? theme.white : theme.black)};
`;

const Rentalnofify = styled.div`
  ${mixin.marginSet(51, 0, 12, 0)}
`;

const SubtitleText = styled.div`
  ${mixin.marginSet(0, 0, 5, 0)}
  span {
    ${mixin.fontSet(theme.black, "16px", "500")}
  }
`;

const ExplainText = styled.div`
  ${mixin.flexSet("", "center")}
  span {
    ${mixin.fontSet(theme.blurrygray, "14px", "")}
    line-height: 1.4;
  }
`;
