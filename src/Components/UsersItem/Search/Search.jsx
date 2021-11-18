import React from 'react';
import classes from './Search.module.css'

const Search = ({setSearchValue}) => {

    return (
        <div className={classes.wrapper}>
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search by firstName"
                aria-label="Search"
                onChange={e => setSearchValue(e.target.value)}
                style={{margin: '0 auto'}}
            />
        </div>
    );
};

export default Search;