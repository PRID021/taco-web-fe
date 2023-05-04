import { useMemo } from "react";
import BaseApi from "./api-config";

function AccountApi() {
  const endpoint = "/account";
  const [axiosInstance,config] =  BaseApi();
  console.log(config,'config');

  return {
    getAll: function(){
      return axiosInstance.get(`${config.baseURL}${endpoint}/getAllAccount`);
    }
  }
}

export default AccountApi;