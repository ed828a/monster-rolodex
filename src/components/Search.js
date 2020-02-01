import React from 'react'

export const Search = ({ placeholder, handleChange }) =>{
    console.log('placeholder:', placeholder);
    return (
        <input
            type='search'
            placeholder={placeholder}
            className='search'
            onChange={handleChange}
        />
    );
} 

