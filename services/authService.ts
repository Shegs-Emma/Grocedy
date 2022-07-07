import baseAxios from "../core/api/axios/baseAxios";
// import { AuthType } from "../interfaces";

class AuthService {
  static async registerUser(data: string) {
    const res = await baseAxios.post(`set?jstring=${data}`);

    console.log("res", res);

    return res?.data || res;
  }

  static async loginUser(data: string) {
    const res = await baseAxios.post(`get?jstring=${data}`);

    console.log("res", res);

    return res?.data || res;
  }
}

export default AuthService;
