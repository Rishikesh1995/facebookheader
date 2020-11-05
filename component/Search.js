import { Avatar } from '@material-ui/core';
import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
    return (
        <div className="search__container">
            <div className="avatar">
                <Avatar/>
            </div>
            <div className="search__icon">
                <SearchIcon/>
                <input type="text" placeholder="search"/>
            </div>
        </div>
    ) 
}

export default Search
