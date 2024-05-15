import axios from "axios"
import { url } from "../URL/constant"
import { apiPath } from "../URL/apipath"
export const autnservice =()=>{

    const loginApi =(val)=>{

        return axios.post(url.domainURl+apiPath.login,val)
    }

    const registerApi=(val)=>{
        return axios.post(url.domainURl+apiPath.register,val)
             
    }
    return {
        loginApi,registerApi
      };
}
