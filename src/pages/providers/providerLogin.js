import axios from "axios";
import providerServicios from "./providerServicios";
import { apiUrl } from "src/boot/globalVariables";

class providerLogin {
  async loginPost(json) {
    console.log("json", apiUrl + providerServicios.loginUser);
    return axios
      .post(apiUrl + providerServicios.loginUser, json)
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        return false;
      });
  }
}

export default new providerLogin();
