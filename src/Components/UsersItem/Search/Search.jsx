import React from 'react';
import classes from './Search.module.css'
import {useDispatch} from "react-redux";
import {searchFilterAc} from "../../../Redux/Reducers/usersReducer";

const Search = () => {

    const dispatch = useDispatch()

    return (
        <div className={classes.wrapper}>
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search by firstName"
                aria-label="Search"
                onChange={e => dispatch(searchFilterAc(e.target.value))}
                style={{margin: '0 auto'}}
            />

        </div>
    );
};

export default Search;