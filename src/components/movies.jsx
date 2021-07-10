import React, { Component } from 'react';  
import { Link } from 'react-router-dom'; 
import { getMovies } from '../services/fakeMovieService';
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import { paginate } from '../util/pagination';
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './common/listGroup';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' },
        selectedGenre: null
    }

    componentDidMount() {
        const genres = [{ _id: '', name: 'All Genres'}, ...getGenres()];
        this.setState({ movies: getMovies(), genres });
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
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    getPagedData = () => {
        const { pageSize, currentPage, movies: allMovies, 
                selectedGenre, sortColumn
        } = this.state;
    
        const filtered = selectedGenre && selectedGenre._id ?
        allMovies.filter(movie => selectedGenre._id === movie.genre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const pagedMovies = paginate(sorted, currentPage, pageSize);

        return { data: pagedMovies, totalCount: filtered.length };
    }

    render() { 
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, genres, sortColumn, selectedGenre } = this.state;

        if(count === 0) return <p>There are no movies in the database.</p> 

        const { data: movies, totalCount } = this.getPagedData();

        return ( 
            <div className="row">
                <p>Showing {totalCount} movies in the database.</p>
                <div className="col-3">
                    <ListGroup 
                        items={genres}
                        selectedGenre={selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <Link
                        to="/movies/new"
                        className="btn btn-primary"
                        style={{ marginBottom: 20 }}
                        >New Movie
                    </Link>
                    <MoviesTable 
                        movies={movies}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        sortColumn={sortColumn}
                        onSort={this.handleSort}
                    />
                    <Pagination 
                        movieCount={totalCount} 
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