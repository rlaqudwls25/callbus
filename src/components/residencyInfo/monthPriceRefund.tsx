import { useRecoilValue } from "recoil";
import { rentalRefundState } from "../recoils/rentalInfo";

const MonthPriceRefund = () => {
  const rentalInfo = useRecoilValue(rentalRefundState);

  const data = rentalInfo.reduce((res, { value, name }) => {
    const price = name === "월 임대료" && Math.floor(Number(value) * 60 * 0.17);

    return res + +price;
  }, 0);

  return (
    <div>
      내 월세 환급금은 {data}만원 입니다. <br /> 자리톡으로 환급 신청하세요.
    </div>
  );
};

export default MonthPriceRefund;
