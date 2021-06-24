import React from 'react';

const ListGroup = (props) => {
    const { genres } = props;
    return ( 
        <ul className="list-group">
            <li className="list-group-item">
                <button>All Genres</button>
            </li>
            {genres.map(genre => ( 
                <li className="list-group-item">
                    <button>{genre.name}</button>
                </li>
            ))}
        </ul>
     );
}
 
export default ListGroup;