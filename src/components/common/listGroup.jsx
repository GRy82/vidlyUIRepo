import React from 'react';

const ListGroup = (props) => {
    const { items, type, valueProperty, textProperty, selectedGenre, onItemSelect } = props;
    return ( 
        <ul className="list-group">
            <li className="list-group-item">
                All {type}
            </li>
            {items.map(item => ( 
                <li 
                    key={item[valueProperty]} 
                    className={selectedGenre === item ? "list-group-item active" : "list-group-item"}
                    onClick={() => onItemSelect(item)}>
                    {item[textProperty]}    
                </li>
            ))}
        </ul>
     );
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

 
export default ListGroup;