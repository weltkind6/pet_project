import React from 'react';
import './UsersItem.css'
import {useDispatch} from "react-redux";
import {sortUsersAc} from "../../Redux/Reducers/usersReducer";

const UsersItem = ({deleteUser, users}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col" onClick={() => dispatch(sortUsersAc())}>First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
                </thead>
                <tbody>
                {users.map(u =>
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


