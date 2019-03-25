import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return(
        <div>
            <div>
            <i className = "fab fa-instagram"></i>
            
            </div>
            <input 
                type = 'text'
                placeholder = 'Input Search'
            />
            <div className = 'search-action-icons'>
                <i className = "far fa-compass"></i>
                <i className = "far fa-heart"></i>
                <i className = "far fa-user-circle"></i>
            </div>
        </div>
    )
}

export default SearchBar;