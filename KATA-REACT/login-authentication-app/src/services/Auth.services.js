import axios from "axios";
import { URL_BACKEND } from "../utils/url_base";

const loginService = (formBody) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${URL_BACKEND}/login`, formBody)
      .then((response) => {
        const { data } = response;
        // console.log('data', data)
        // console.log('status', status)
        resolve(data);
      })
      .catch(({ response }) => {
        /* Aplicamos destructuring */
        // console.log('error', error.response)
        // const { response} = error
        reject(response);
      });
  });
};

export default loginService;
