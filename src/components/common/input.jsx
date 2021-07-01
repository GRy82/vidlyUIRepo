import React from 'react';

const Input = ({ name, value, onChange, label }) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                onChange={onChange}
                value={value}
                name={name}
                type="text" 
                className="form-control" 
                id={name}
                placeholder={name}
            />
        </div>
    );
}
 
export default Input;