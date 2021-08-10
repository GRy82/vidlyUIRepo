import http from './httpService';
import config from '../config.json';

export async function getMovies() {
    return await http.get(config.moviesEndpoint);
  }
  
export function getMovie(id) {
    return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    movieInDb.title = movie.title;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    if (!movieInDb._id) {
        movieInDb._id = Date.now().toString();
        movies.push(movieInDb);
    }

    return movieInDb;
}

export async function deleteMovie(id) {
    await http.delete(config.moviesEndpoint + '/' + id);
}