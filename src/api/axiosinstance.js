import axios from "axios";

const baseURL = "https://65fdc848b2a18489b38569a6.mockapi.io";
//adverts

export const axiosinstance = axios.create({
    baseURL,
})
