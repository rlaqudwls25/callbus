import { atom } from "recoil";
import { BuildingInfoType } from "../../types/inputData";

export const buildingInfoState = atom<BuildingInfoType[]>({
  key: "buildingInfoState",
  default: [],
});
