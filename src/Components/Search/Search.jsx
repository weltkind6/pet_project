import React, {useState} from 'react';
import classes from './Search.module.css'
import {useDispatch} from "react-redux";
import {findUserAc} from "../../Redux/Reducers/usersReducer";

const Search = () => {

    const dispatch = useDispatch()
    return (
        <div>
            <nav className={classes.navbar}>
                <form className={classes.searchFrom}>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search by firstName"
                        aria-label="Search"
                        onChange={e => dispatch(findUserAc(e.target.value))}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    );
};

export default Search;