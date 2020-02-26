import React from 'react';

import searchCss from '../searchbar/searchbar.module.css';

const SearchBar = (props) => {
    return (
        <input className={searchCss.searchWrapper} type="search" onChange={props.handleSearch} placeholder="What are you looking for?" />
    );
}


export default SearchBar;