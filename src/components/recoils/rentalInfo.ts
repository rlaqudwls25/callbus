import { atom } from "recoil";
import { RentalPriceType } from "../../types/inputData";

export const rentalRefundState = atom<RentalPriceType[]>({
  key: "rentalRefundState",
  default: [],
});

export const rentalTypeNameState = atom<string>({
  key: "rentalTypeNameState",
  default: "월세",
});
