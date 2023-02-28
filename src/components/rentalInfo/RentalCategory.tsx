import { useEffect, useState } from "react";
import styled from "styled-components";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { RentalInfo, RentalType } from "../../mock/data";
import Input from "../../layout/input";
import { RentalPriceType } from "../../types/inputData";
import { useStore } from "../../stores/useStore";

const RentalCategory = () => {
  const [rentalTypeName, setRentalTypeName] = useState<string>("월세");
  const [rentalList, setRentalList] = useState<RentalPriceType[]>(RentalInfo);

  const { managePriceCheckToggle, managePriceCheck } = useStore(
    (state) => state
  );

  useEffect(() => {
    handelRentalValue();
  }, [rentalTypeName]);

  useEffect(() => {
    handleDisabledData();
  }, [managePriceCheck]);

  const handleChangeType = (typeName: string) => {
    setRentalTypeName(typeName);
  };

  const handelRentalValue = () => {
    setRentalList((prev) => {
      const charterData = rentalList.filter((item) =>
        item.rentalTypeCheck.includes("전세")
      );

      if (rentalTypeName === "월세") {
        return RentalInfo;
      } else if (rentalTypeName === "전세") {
        return charterData;
      }

      return prev;
    });
  };

  const handleDisabledData = () => {
    const charterData = RentalInfo.filter((item) =>
      item.rentalTypeCheck.includes("전세")
    );
    // 월세 disabled
    const monthlyDisabledData = rentalList.map((item) =>
      item.name === "월 관리비" ? { ...item, value: "0" } : item
    );

    // 전세 disabled
    const chaterDisalbedData = rentalList
      .map((item) =>
        item.name === "임대료 납부일" || item.name === "월 관리비"
          ? { ...item, value: "0" }
          : item
      )
      .filter((item) => item.rentalTypeCheck.includes("전세"));

    // 이걸 어떻게 고치냐..

    if (rentalTypeName === "월세" && managePriceCheck) {
      setRentalList(monthlyDisabledData);
    } else if (rentalTypeName === "월세" && !managePriceCheck) {
      setRentalList(RentalInfo);
    } else if (rentalTypeName === "전세" && managePriceCheck) {
      setRentalList(chaterDisalbedData);
    } else if (rentalTypeName === "전세" && !managePriceCheck) {
      setRentalList(charterData);
    }
  };

  const handleRentalInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    const updateData = rentalList.map((item) =>
      item.id === Number(id) ? { ...item, value } : item
    );

    setRentalList(updateData);
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
      <div>
        <Rentalnofify>
          <span>임대비용</span>
          <div>
            <img src="/static/images/notification.png" alt="알림사항" />
            <span>천원 단위는 5.5처럼 소수점 첫째자리까지 입력해주세요.</span>
          </div>
          <div>
            <img src="/static/images/notification.png" alt="알림사항" />
            <span>비용 입력시 고지서가 무료로 제공됩니다.</span>
          </div>
        </Rentalnofify>
        <RentalForm>
          {rentalList.map((item) => {
            const { id, value, type, unit, name, max, min, rentalManageCheck } =
              item;

            const check =
              rentalTypeName === "월세"
                ? rentalManageCheck[0].month
                : rentalManageCheck[0].year;

            return (
              <Input
                id={id}
                key={id}
                type={type}
                value={value}
                onChange={handleRentalInfo}
                disabled={managePriceCheck && check}
                name={name}
                unit={unit}
                min={min}
                max={max}
              />
            );
          })}
        </RentalForm>
      </div>
      <ManageCheckForm checkManagePrice={managePriceCheck}>
        <input type="checkbox" onClick={managePriceCheckToggle} />
        <span>관리비는 관리실에 따로 납부하거나 없습니다.</span>
      </ManageCheckForm>
      <div>
        {/* <ConfirmBtn onClick={saveRentalInfo}>금액 확인하기</ConfirmBtn> */}
        <span>환급금만 확인해도 월세고지서가 무료로 제공됩니다.</span>
      </div>
    </RentalInfoContainer>
  );
};

export default RentalCategory;

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

const TypeName = styled.li<{ rentalTypeName: boolean; typeName: string }>`
  width: 50%;
  height: 44px;
  border: 1px solid ${theme.blurrygray};
  ${mixin.flexSet("center", "center")}
  cursor: pointer;
  background-color: ${(props) => props.rentalTypeName && theme.blue};
  border-radius: ${(props) =>
    props.typeName === "월세" ? "3px 0px 0px 3px" : "0px 3px 3px 0px"};
  border-left: ${(props) => props.typeName === "전세" && "none"};
`;

const Rentalnofify = styled.div`
  ${mixin.marginSet(51, 0, 12, 0)}
`;

const RentalForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ManageCheckForm = styled.div<{ checkManagePrice: boolean }>`
  ${mixin.marginSet(17, 0, 32, 0)}

  span {
    color: ${(props) => (props.checkManagePrice ? theme.blue : theme.black)};
  }
`;
const ConfirmBtn = styled.button`
  width: 380px;
  height: 50px;
  ${mixin.marginSet(0, 0, 11, 0)}
`;
