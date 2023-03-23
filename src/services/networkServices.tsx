import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
const baseURl = 'https://microbid-app-api.archik.in';


const instance = axios.create({
    baseURL: baseURl,
    timeout: 10000,
});


export const net = {

    get: async (url: string) => {

        const headers = {
            "x-access-token": localStorage.getItem('token') || ''
        }

        const response = await instance.get(url, { headers }).catch(net.handleCatch);

        if (!response) return false;
        if (response.status === 200) return { status: true, data: response.data };
        else if (response.data) return { status: false, error: response.data }
    },

    post: async (url: string, data: any) => {
        console.log("called net");
        const headers = {
            "x-access-token": localStorage.getItem('token') || ''
        }
        console.log('====================================');
        console.log(baseURl);
        console.log('====================================');
        const response = await instance.post(url, data, { headers, timeout: 10000 }).catch(net.handleCatch);

        if (!response) return false;
        if (response.status === 200) return { status: true, data: response.data };
        else if (response.data) return { status: false, error: response.data }
    },

    handleCatch: (err: AxiosError<any>) => {
        if (err.response && err.response.status) {
            toast(getErrorMessageBasedOnUrl(err.response.status, err.response?.data.errors), { type: "error" });
        }

        return err.response;
    }
}

const getErrorMessageBasedOnUrl = (errCode: number, msg: string) => {
    if (window.location.pathname === "/signup" && errCode === 400) return "Please fill the form with valid details.";
    if (window.location.pathname === "/login" && (errCode === 404 || errCode === 401)) return "Please fill the form with valid details.";

    if (errCode === 400) return (msg) ? msg : "Please input correct details";
    return "We are facing technical issue, please try again."
}