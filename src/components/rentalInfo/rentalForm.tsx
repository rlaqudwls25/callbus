import { useEffect, useState } from "react";
import styled from "styled-components";
import RentalInput from "../../layout/rentalInput";
import { RentalInfo } from "../../mock/data";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { RentalPriceType } from "../../types/inputData";
import { useNavigate } from "react-router-dom";
import { rentalRefundState, rentalTypeNameState } from "../recoils/rentalInfo";
import { useRecoilValue, useRecoilState } from "recoil";

const RentalForm = () => {
  const [rentalList, setRentalList] = useState<RentalPriceType[]>(RentalInfo);
  const [managePriceCheck, setManagePriceCheck] = useState(false);
  const [refundPrice, setRefundPrice] = useRecoilState(rentalRefundState);
  const rentalTypeName = useRecoilValue(rentalTypeNameState);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(refundPrice));
  }, [refundPrice]);

  useEffect(() => {
    handelRentalValue();
  }, [rentalTypeName]);

  useEffect(() => {
    handleDisabledData();
  }, [managePriceCheck, rentalTypeName]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  const handelRentalValue = () => {
    setRentalList(() => {
      const charterData = rentalList.filter((item) =>
        item.rentalTypeCheck.includes("전세")
      );

      if (rentalTypeName === "월세") {
        return RentalInfo;
      } else {
        return charterData;
      }
    });
  };

  const handleDisabledData = () => {
    const charterData = RentalInfo.filter((item) =>
      item.rentalTypeCheck.includes("전세")
    );
    // 월세 disabled
    const monthlyDisabledData = RentalInfo.map((item) =>
      item.name === "월 관리비" ? { ...item, value: "" } : item
    );

    // 전세 disabled
    const chaterDisalbedData = rentalList
      .map((item) =>
        item.name === "임대료 납부일" || item.name === "월 관리비"
          ? { ...item, value: "" }
          : item
      )
      .filter((item) => item.rentalTypeCheck.includes("전세"));

    setRentalList((prev) => {
      if (rentalTypeName === "월세") {
        if (managePriceCheck) {
          return monthlyDisabledData;
        } else {
          return RentalInfo;
        }
      }

      if (rentalTypeName === "전세") {
        if (managePriceCheck) {
          return chaterDisalbedData;
        } else {
          return charterData;
        }
      }

      return prev;
    });
  };

  const handleRentalInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    const updateData = rentalList.map((item) =>
      item.id === Number(id) ? { ...item, value } : item
    );

    setRentalList(updateData);
  };

  const managePriceCheckToggle = () => {
    setManagePriceCheck((prev) => !prev);
  };

  const getLocalStorage = () => {
    if (!refundPrice.length) {
      return;
    }
    const getList = JSON.parse(localStorage.getItem("list") as string);
    setRentalList(getList);
  };

  const saveRentalInfo = () => {
    setRefundPrice(rentalList);
    navigate("/refund");
  };

  return (
    <>
      <RentalInputForm>
        {rentalList.map((item) => {
          const { id, value, type, unit, name, max, min, rentalManageCheck } =
            item;

          const check =
            rentalTypeName === "월세"
              ? rentalManageCheck[0].month
              : rentalManageCheck[0].year;

          return (
            <RentalInput
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
      </RentalInputForm>
      <ManageCheckForm checkManagePrice={managePriceCheck}>
        <input type="checkbox" onClick={managePriceCheckToggle} />
        <span>관리비는 관리실에 따로 납부하거나 없습니다.</span>
      </ManageCheckForm>
      <SaveButtonBox>
        <ConfirmBtn onClick={saveRentalInfo}>금액 확인하기</ConfirmBtn>
        <span>환급금만 확인해도 월세고지서가 무료로 제공됩니다.</span>
      </SaveButtonBox>
    </>
  );
};

export default RentalForm;

const RentalInputForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ManageCheckForm = styled.div<{ checkManagePrice: boolean }>`
  ${mixin.marginSet(17, 0, 32, 0)}

  span {
    ${mixin.fontSet("", "14px", "700")}
    color: ${(props) => (props.checkManagePrice ? theme.blue : theme.black)};
  }
`;

const ConfirmBtn = styled.button`
  width: 100%;
  height: 50px;
  ${mixin.marginSet(0, 0, 11, 0)}
  background-color: ${theme.blue};
  color: ${theme.white};
  cursor: pointer;
`;

const SaveButtonBox = styled.div`
  span {
    ${mixin.fontSet(theme.gray, "14px", "400")}
  }
`;
