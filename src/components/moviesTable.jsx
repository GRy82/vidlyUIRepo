import React from 'react';
import Like from './common/like';

const MoviesTable = (props) => {
    const { onLike, onDelete, movies } = props;

    return (  
        <table className="table col">
            <thead>
                <tr>
                    <th onClick={() => onSort('title')}>Title</th>
                    <th onClick={() => onSort('genre.name')}>Genre</th>
                    <th onClick={() => onSort('numberInStock')}>Stock</th>
                    <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
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
                    <td><Like liked={movie.liked} onLike={() => onLike(movie)}/></td>
                    <td>
                        <button 
                            onClick={() => onDelete(movie)} 
                            className="btn btn-sm btn-danger"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table> 
    );
}
 
export default MoviesTable;