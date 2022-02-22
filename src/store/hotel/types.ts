export type TInitialState = {
  hotelList:getHoletListResponse;
  hotelInf:HoletInfResponse|null;
  roomlist:getRoomHotelResponse;
  roomInfo:roomInfoResponse|null;
  result:resultSellRoomResponse|null;
};

export type sendTokenRequest = {
  token:string;
};

export type getHoletListResponse = HoletListResponse[];

export type getRoomHotelResponse = roomHotelResponse[];

export type roomHotelResponse = {
    id:string;
    available: "Free" | "Your" | "Other";
    number: string;
    price: number;
};

export type HoletListResponse = {
  id: string;
  title: string;
  description: string;
  photo: string;
};

export type HoletInfResponse = {
  title: string;
  description: string;
  photo: string;
  address: string;
  rooms: number;
};

export type IdHotelResponse = {
  id:string;
};

export type roomInfoResponse = {
  available: "Free" | "Your" | "Other";
  price: number;
  number: string;
  photo: string;
  roomsAmount: number;
  bedsAmount: number;
};

export type resultSellRoomResponse = {
    result: "Куплено" | "Недостаточно денег" | "Вы уже купили этот номер" | "Номер уже занят другим человеком";
    money: number;
    id:string;
};






