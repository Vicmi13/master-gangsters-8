import axios from "axios";
import { URL_BACKEND } from "../utils/url_base";

// crear usuario

// getAllUsers

// get info-user-logged

const getInfoUser = (jwt) => {
  const token = `JWT ${jwt}`;
  const headers = { Authorization: token };
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL_BACKEND}/user/me`, { headers })
      .then(({ data }) => resolve(data))
      .catch(({ response }) => reject(response));
  });
};

export default getInfoUser;
