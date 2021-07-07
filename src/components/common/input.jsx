import React from 'react';

const Input = ({ name, value, onChange, label, error }) => {
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
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
 
export default Input;