import React from 'react';

const Like = (props) => {
    let heartClass = 'fa fa-heart';
    if(!props.liked) heartClass += '-o';
    else heartClass = 'far ' + heartClass;
    return ( 
        <React.Fragment>
        <i 
            onClick={props.onLike} 
            style={{ cursor: "pointer" }}
            className={heartClass} 
            aria-hidden="true"></i>
        </React.Fragment>
    );
}
 
export default Like;