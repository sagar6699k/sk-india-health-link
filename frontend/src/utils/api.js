import axios from "axios";

const BASE_API = "https://wayfair.p.rapidapi.com";

export const requestFromAPI = async (method, url, params) => {
    const options = {
        method: `${method}`,
        url: `${BASE_API}/${url}`,
        params: params,
        headers: {
            "X-RapidAPI-Key": "9ca5180883mshfa08791d83ebd94p18f2a3jsnc2619f60f80c",
            "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
        },
    };

    try {
        const { data } = await axios.request(options);
        console.log("Data11111", data);
        return data;
    } catch (error) {
        console.error("Error>>>>>>", error);
    }
};