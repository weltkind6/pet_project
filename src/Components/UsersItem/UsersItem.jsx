import React from 'react';
import './UsersItem.module.css'
import Search from "./Search/Search";
import classes from './UsersItem.module.css'


const UsersItem = ({deleteUser, users, searchValue, setSearchValue }) => {

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
                {users.filter
                (el => el.firstName.toLowerCase().includes(searchValue.toLowerCase())).map(u =>
                    <tr
                        onClick={() => deleteUser(u.id)}
                        key={Math.random() * 1000}>
                        <td>{u.id}</td>
                        <td>{u.firstName}</td>
                        <td>{u.lastName}</td>
                        <td>{u.email}</td>
                        <td>{u.phone}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default UsersItem;


