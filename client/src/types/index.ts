export type MyResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export type LocationType = {
  _id: string
  name: string;
  lat: number
  lng: number
  picture: string;
  operationalHour: number;
  province: string;
  address: string;
};
