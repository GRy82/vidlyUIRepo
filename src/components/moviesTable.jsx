import React, {Component} from 'react';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';
import Like from './common/like';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title'},
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        { 
            key: 'like', 
            content: movie => (
                <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} /> 
            )
        },
        { 
            key: 'delete',
            content: movie => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-small"
                >
                  Delete
                </button>
            )
        }
    ];

    render() { 
        const { movies, onSort, sortColumn } = this.props;
        return (  
            <table className="table col">
                <TableHeader 
                    columns={this.columns}
                    onSort={onSort}
                    sortColumn={sortColumn}
                />
                <TableBody
                    items={movies}
                    columns={this.columns}
                />
            </table> 
        );
    }
}
 
export default MoviesTable;
