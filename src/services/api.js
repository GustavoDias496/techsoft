import axios from "axios"

const api = axios.create({
    baseURL: "https://sifsoftapi.herokuapp.com/",
});

export default api;