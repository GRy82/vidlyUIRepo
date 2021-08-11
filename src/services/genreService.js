import http from './httpService';
import {apiUrl} from '../config.json';

export async function getGenres() {
    const result = await http.get(apiUrl + '/genres');
}