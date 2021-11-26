import React from 'react';
import './UsersItem.css'
import Search from "./Search/Search";
import * as emoji from "emoji-dictionary";


const UsersItem = ({deleteUser, users, searchText, sortedUsers, setMoreInfo, sortingToggle}) => {

    const emo = (emoji.getUnicode("x"));
    const getFullInfo = id => {
        users.map((i) => i.id === id
            ? setMoreInfo(
                {
                    id: i.id,
                    name: i.firstName,
                    surname: i.lastName,
                    email: i.email,
                    phone: i.phone,
                    address: i.address,
                    description: i.description
                })
            : null);
    }
    return (
        <div>
            <Search/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col" onClick={() => sortedUsers()}>
                        First name
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVNqAXJxRIbu_LLUluxv05KzsuiJREsj2mw&usqp=CAU"
                            alt="tr"
                            className={`arrow ${sortingToggle && 'arrow-down'}`}
                        />
                    </th>
                    <th scope="col">Last name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
                </thead>
                <tbody>

                {users.filter
                (el => el.firstName.toLowerCase().includes(searchText.toLowerCase()))
                    .map(u =>
                        <tr key={Math.random() * 1000}>
                            <td>{u.id}</td>
                            <td onClick={() => getFullInfo(u.id)}>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                            <td onClick={() => deleteUser(u.id)} className='userDelete'>{emo}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UsersItem;


