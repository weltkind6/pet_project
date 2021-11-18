import React from 'react';
import './UsersItem.css'
import Search from "./Search/Search";
import {CSSTransition, TransitionGroup} from "react-transition-group";


const UsersItem = ({deleteUser, users, searchValue, setSearchValue}) => {
    const id = Math.random() * 1000

    return (
        <div>

            <Search setSearchValue={setSearchValue}/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
                </thead>

                <tbody>
                {users.filter(el => el.firstName.toLowerCase().includes(searchValue.toLowerCase())).map(u =>
                    <tr key={Math.random() * 1000} onClick={() => deleteUser(u.id)}>
                        <td>{u.id}</td>
                        <td>{u.firstName}</td>
                        <td>{u.lastName}</td>
                        <td>{u.email}</td>
                        <td>{u.phone}</td>
                    </tr>
                )}
                </tbody>
            </table>

        </div>
    );
};

export default UsersItem;


