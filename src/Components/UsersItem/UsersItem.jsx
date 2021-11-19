import React from 'react';
import './UsersItem.css'
import Search from "./Search/Search";
import {useSelector} from "react-redux";



const UsersItem = ({deleteUser, users}) => {

    const searchText = useSelector(state => state.user.searchText)

    // const getFilteredUser = useSelector
    // (state => state.user.searchFilter.filter(el => el.firstName.includes(searchText)))

    return (
        <div>
            <Search/>
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

                {users.filter(el => el.firstName.toLowerCase().includes(searchText.toLowerCase())).map(u =>
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


