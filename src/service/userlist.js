import axios from "axios";
import { url } from "../URL/constant";
import { apiPath } from "../URL/apipath";

export const UserDetailsService = () => {

    const createEmployee = (val) => {
        return axios.post(url.domainURl + apiPath.createEmployee, val)
    }

    const getEmployeeDetails = () => {
        return axios.get(url.domainURl + apiPath.userDetails)
    }

    const editEmployee = (val) => {
        return axios.put(url.domainURl + apiPath.updateUser, val)
    }

    const deleteEmployee = (val) => {
        return axios.delete(url.domainURl + apiPath.deleteUser + val)
    }



    return {
        createEmployee, getEmployeeDetails, deleteEmployee, editEmployee
    }

}