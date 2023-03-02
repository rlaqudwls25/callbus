import React from "react";
import create from "zustand";
import { RentalInfo } from "../mock/data";
import { RentalPriceType } from "../types/inputData";

type RentalInfoType = {
  managePriceCheck: boolean;
  managePriceCheckToggle: () => void;
  rentalInfoData: RentalPriceType[];
  handleRentalInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeType: (typeName: string) => void;
  rentalTypeName: string;
  //   handelRentalValue: () => void;
};

export const useStore = create<RentalInfoType>((set, get) => ({
  managePriceCheck: false,
  rentalInfoData: RentalInfo,
  rentalTypeName: "월세",

  // 월세, 전세
  handleChangeType: (typeName) =>
    set(() => ({
      rentalTypeName: typeName,
    })),

  // 관리비 checkbox state
  managePriceCheckToggle: () =>
    set((state) => ({
      managePriceCheck: !state.managePriceCheck,
    })),

  // 임대비용 state
  handleRentalInfo: (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const updateData = get().rentalInfoData.map((item) =>
      item.id === Number(id) ? { ...item, value } : item
    );

    set({ rentalInfoData: updateData });
  },

  //   handelRentalValue: () => {
  //     const charterData = get().rentalInfoData.filter((item) =>
  //       item.rentalTypeCheck.includes("전세")
  //     );
  //     const type = get().rentalTypeName;

  //     console.log("type", type);

  //     if (type === "월세") {
  //       return get().rentalInfoData;
  //     } else if (type === "전세") {
  //       return charterData;
  //     }
  //   },
}));
