import http from './httpService';
import config from '../config.json';

export function getGenres() {
    const result = http.get(config.genresEndpoint, )
}