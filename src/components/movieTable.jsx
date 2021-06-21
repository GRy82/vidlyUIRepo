import React, { Component } from 'react';   
import { getMovies } from '../services/fakeGenreService';

class MovieTable extends Component {
    getAllMovies(){
        return getMovies();
    }

    render() { 
        return ( 
        <table></table> 
        );
    }
}
 
export default MovieTable;