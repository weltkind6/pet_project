import React from 'react';
import './UsersItem.css'

const UsersItem = ({deleteUser, users}) => {
    return (
        <div>
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
                {users.map(u =>
                    <tr
                        onClick={() => deleteUser(u.id)}
                        key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.username}</td>
                        {/*<td>{u.lastName}</td>*/}
                        <td>{u.email}</td>
                        {/*<td>{u.phone}</td>*/}
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default UsersItem;


