export type RentalPriceType = {
  id: number;
  type: string;
  value: string | number;
  unit: string;
  name: string;
  max: string;
  min: string;
  rentalTypeCheck: string[];
  rentalManageCheck: any;
};

export type BuildingInfoType = {
  id: number;
  type: string;
  value: string | number;
  name: string;
  placeholder: string;
  show: boolean;
};
