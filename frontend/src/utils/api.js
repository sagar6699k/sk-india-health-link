import axios from "axios";

const BASE_API = "";

export const requestFromAPI = async (method, url, params) => {
    const options = {
        method: `${method}`,
        url: `${BASE_API}/${url}`,
        params: params
    };

    try {
        const { data } = await axios.request(options);
        console.log("Data11111", data);
        return data;
    } catch (error) {
        console.error("Error>>>>>>", error);
    }
};