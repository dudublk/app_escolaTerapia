import axios from 'axios';

const apiLocal = axios.create({
    baseURL = 'http://localhost:2121'
})

export default apiLocal;