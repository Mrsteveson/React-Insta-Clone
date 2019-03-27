import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return(
        <div className = 'searchbar-container'>
            <div className = 'search-instagram-icon'>
                <i className = "fab fa-instagram"></i>
                <div className = 'slice'></div>
                <img className = 'logo' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt = 'logo' />
            </div>
            <input 
                className = 'the-search-bar'
                type = 'text'
                placeholder = 'Input Search'
                onChange = {props.search}
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