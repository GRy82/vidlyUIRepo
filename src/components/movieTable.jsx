import React, { Component } from 'react';   
import { getMovies } from '../services/fakeMovieService';

class MovieTable extends Component {
    state = {
        movies: []
    }
    getAllMovies(){
        this.setState({ movies }, getMovies());
    }

    render() { 
        return ( 
        <table onLoad={() => this.getAllMovies}>
            <tr>
                <th>Title</th><th>Genre</th><th>Stock</th><th>Rental Rate</th>
            </tr>
            {this.state.movies.forEach(movie => 
            { 
                <React.Fragment>
                    <td>movie.title</td>
                    <td>movie.genre.name</td>
                    <td>movie.numberInStock</td>
                    <td>movie.rentalRate</td>
                </React.Fragment>
            })}
        </table> 
        );
    }
}
 
export default MovieTable;