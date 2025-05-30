export interface IUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: IUserCompany;
}

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  userId: number;
  userName: string;
  userEmail: string;
  userAddress: IUserAddress;
  userPhone: string;
  userWebsite: string;
  userCompany: IUserCompany;
}
