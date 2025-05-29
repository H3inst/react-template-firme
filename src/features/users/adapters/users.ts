import type { IUser, IUserResponse } from "../types/users";

export function getUsersAdapter(users: IUserResponse[]): IUser[] {
  return users.map((user) => ({
    userId: user.id,
    userName: user.name,
    userAddress: user.address,
    userCompany: user.company,
    userEmail: user.email,
    userPhone: user.phone,
    userWebsite: user.website,
  }));
}
