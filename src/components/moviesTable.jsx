import React, {Component} from 'react';
import Table from './common/table';
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
                <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} /> 
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
            <Table 
                items={movies}
                onSort={onSort}
                sortColumn={sortColumn}
                columns={this.columns}
            /> 
        );
    }
}
 
export default MoviesTable;
