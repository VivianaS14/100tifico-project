const axios = require('axios').default;
const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id, pag = '') => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        return axios.get(apiURL, {
            params: {
                page: pag
            }
        });
    } catch {
        console.log('Fetch Error', error);
    }
}
export default getData;