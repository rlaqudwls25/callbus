import { atom } from "recoil";
import { BuldingInfoType } from "../../types/inputData";

export const buldingInfoState = atom<BuldingInfoType[]>({
  key: "buldingInfoState",
  default: [],
});
