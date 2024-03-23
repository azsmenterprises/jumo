import { apiUrl } from "./config";
import axios from "axios";

const authToken = localStorage.getItem("authToken") || "";

export const axiosInstance = () => {
    return axios.create({
        baseURL: apiUrl,
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    });
};


export const axiosWithoutToken = () => {
    return axios.create({
        baseURL: apiUrl,
        headers: {
            "content-type": "application/json"
        }
    });
};
