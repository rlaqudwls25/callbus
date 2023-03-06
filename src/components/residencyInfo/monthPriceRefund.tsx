import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { mixin } from "../../styles/mixin";
import { theme } from "../../styles/theme";
import { rentalRefundState } from "../recoils/rentalInfo";

const MonthPriceRefund = () => {
  const rentalInfo = useRecoilValue(rentalRefundState);
  const navigate = useNavigate();

  const refundMonthPrice = rentalInfo.reduce((res, { value, name }) => {
    const price = name === "월 임대료" && Math.floor(Number(value) * 60 * 0.17);

    return res + +price;
  }, 0);

  const renTalInfoUpdate = () => {
    navigate("/");
  };

  return (
    <PriceRefundBox>
      <PriceRefundWrapper>
        <PriceText>
          <h2>
            내 월세 환급금은 <span>최대 {refundMonthPrice}만원</span> 입니다.{" "}
            <br /> 자리톡으로 환급 신청하세요 👇
          </h2>
        </PriceText>
        <NoticeRefundText>
          <span>
            해당 금액은 확정된 것이 아니며 세액공제 자격조건, <br />
            세금납부 및 공제이력에 따라 변동될 수 있습니다.
          </span>
          <RentalPriceUpdateBtn onClick={renTalInfoUpdate}>
            <span>임대비용 수정하기</span>
          </RentalPriceUpdateBtn>
        </NoticeRefundText>
      </PriceRefundWrapper>
    </PriceRefundBox>
  );
};
export default MonthPriceRefund;

const PriceRefundBox = styled.section``;

const PriceRefundWrapper = styled.div``;

const PriceText = styled.div`
  ${mixin.flexSet("center", "center")}
  margin-bottom: 8px;

  h2 {
    ${mixin.fontSet(theme.black, "20px", "700")}
    text-align: center;
    line-height: 1.4;
    span {
      color: ${theme.blue};
    }
  }
`;

const NoticeRefundText = styled.div`
  ${mixin.flexSet("center", "center", "column")}
  line-height: 1.4;

  span {
    ${mixin.fontSet(theme.blurrygray, "16px", "500")}
    text-align: center;
  }
`;

const RentalPriceUpdateBtn = styled.button`
  ${mixin.marginSet(10, 0, 0, 0)}

  span {
    ${mixin.fontSet(theme.gray, "14px", "500")}
    text-decoration: underline
  }
`;
