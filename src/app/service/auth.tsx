import instance from "./api";
import qs from "qs";

export interface RegisterUser {
  full_name: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}


const AuthServise = {
  userRegister: async (user: RegisterUser) => {
    return await instance.post(`auth/sign_up`, user);
  },

  userLogin: async (user: LoginUser) => {
    const response = await instance.post(
      `auth/sign_in`,
      qs.stringify({
        username: user.email,
        password: user.password,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response;
  },
};

export default AuthServise;
