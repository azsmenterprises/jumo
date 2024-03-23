import { apiUrl } from "./config";
import axios from "axios";
import Swal from "sweetalert2";

const authToken = localStorage.getItem("accessToken") || "";

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
            "Content-Type": "application/json"
        }
    });
};



export const sweetAlert = (type, title, message) => {
    Swal.fire({
        icon: type,
        title: title,
        text: message,
        focusConfirm: false,
    });
};


