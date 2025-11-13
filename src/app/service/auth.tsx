import instance from "./api";
import qs from "qs";

const AuthServise = {
  userRegister: async (user: any) => {
    return await instance.post(`auth/sign_up`, user);
  },

  userLogin: async (user: any) => {
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
