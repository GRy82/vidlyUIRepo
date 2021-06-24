import React from 'react';

const ListGroup = (props) => {
    const { items, type, valueProperty, textProperty } = props;
    return ( 
        <ul className="list-group">
            <li className="list-group-item">
                <button>All {type}</button>
            </li>
            {items.map(item => ( 
                <li 
                    key={item[valueProperty]} 
                    className="list-group-item">
                    <button>
                        {item[textProperty]}
                    </button>
                </li>
            ))}
        </ul>
     );
}
 
export default ListGroup;