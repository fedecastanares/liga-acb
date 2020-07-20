import axios from 'axios';
import { baseURL } from './baseURL'

export const leaguesRequest = (id) => {
    const getData = async () => {
        const data = await axios.get(baseURL + '/wp-json/sportspress/v2/tables/' + id);
        return data.data;
    }
    return getData();
}