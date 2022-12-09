const axios = require('axios').default;
const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        return axios.get(apiURL);
    } catch {
        console.log('Fetch Error', error);
    }
}
export default getData;