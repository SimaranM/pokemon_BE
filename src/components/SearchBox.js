import React from 'react';

export const SearchBox = ({ placeholder, handleChange }) => (
    <form className='search-form' >
        <input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
        <i class='fa fa-search' aria-hidden='true'></i>
    </form>

);

