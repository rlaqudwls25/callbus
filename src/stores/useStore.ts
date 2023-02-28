import create from "zustand";
import { RentalPriceType } from "../types/inputData";

type RentalInfo = {
  managePriceCheck: boolean;
  managePriceCheckToggle: () => void;
  rendalInfoData: RentalPriceType[];
};

export const useStore = create<RentalInfo>((set) => ({
  managePriceCheck: false,
  rendalInfoData: [],
  managePriceCheckToggle: () =>
    set((state) => ({
      managePriceCheck: !state.managePriceCheck,
    })),
}));
