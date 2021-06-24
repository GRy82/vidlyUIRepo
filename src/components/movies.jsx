import React, { Component } from 'react';   
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../util/pagination';
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './common/listGroup';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    }

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    }

    handleLike = movie => {
        let movies = [];
        movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleGenreSelect = genre => {

    }

    render() { 
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies, genres } = this.state;

        if(count === 0) 
            return <p>There are no movies in the database.</p> 
        
        const movies = paginate(allMovies, currentPage, pageSize);

        return ( 
            <div className="row">
                <p>Showing {count} movies in the database.</p>
                
                <div className="col-3">
                    <ListGroup 
                        items={genres}
                        textProperty="name"
                        valueProperty="_id"
                        type={"Genres"} 
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <table className="table col">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th>    </th>
                                <th>    </th>
                            </tr>
                        </thead>
                        <tbody>
                        {movies.map(movie => 
                        (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like liked={movie.liked} onLike={() => this.handleLike(movie)}/></td>
                                <td>
                                    <button 
                                        onClick={() => this.handleDelete(movie)} 
                                        className="btn btn-sm btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table> 
                    <Pagination 
                        movieCount={count} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}
 
export default Movies;