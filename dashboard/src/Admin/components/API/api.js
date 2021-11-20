import axios from "axios";


const api = axios.create({
    baseURL: 'https://app-escolaterapia.herokuapp.com/formulario'

});


export default api; 