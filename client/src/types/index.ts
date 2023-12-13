export type MyResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export type LocationType = {
  name: string;
  picture: string;
  coordinate: string;
  operationalHour: number;
  province: string;
  address: string;
};
