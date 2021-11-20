import axios from "axios";


const apiheroku = axios.create({
    baseURL: "https://app-escolaterapia.herokuapp.com"
   
});
export default apiheroku;