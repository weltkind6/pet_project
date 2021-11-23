import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addUserActionCreator, deleteUserActionCreator, sortedUsersAc} from "./Redux/Reducers/usersReducer";
import {getCustomers} from "./API/asyncActions/users";
import UsersItem from "./Components/UsersItem/UsersItem";
import React, {useState} from "react";
import UsersForm from "./Components/UsersForm/UsersForm";
import MyButton from "./UI/Button/MyButton";
import Preloader from "./UI/Preloader/Preloader";


function App() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    const newReducer = useSelector(state => state.preloader.loaded)
    const [formAction, setFormAction] = useState(false)
    // Sorting
    const sorting = useSelector(state => state.user.sortedUsers)
    const [toggle, setToggle] = useState(false)
    const sortedUsers = () => {
        setToggle(!toggle)
        toggle ? dispatch(sortedUsersAc(users.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)).map((i) => i)))
            :
            dispatch(sortedUsersAc(users.sort((a, b) => (a.firstName < b.firstName ? 1 : -1)).map((i) => i)))
    }
    // search
    const searchText = useSelector(state => state.user.searchText)
    // Add 4 in 1 hook
    const [addNewUser, setAddNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })
    const addFullUser = (e) => {
        e.preventDefault()
        dispatch(addUserActionCreator({
            ...addNewUser, id: Date.now()
        }))
        setFormAction(false)
    }

    // Delete
    const deleteUser = id => {
        dispatch(deleteUserActionCreator(id))
    }
    // Get Form
    const getFormOnclick = () => {
        setFormAction(true)
    }

    return (
        <div className="App">
            <div className="App-wrapper">
                <div className='buttonsBlock'>
                    <MyButton onClick={() => dispatch(getCustomers())} myClass={'smallDataBtn'}>Small data</MyButton>
                    <MyButton onClick={getFormOnclick} myClass={'openFormBtn'}>Open form</MyButton>
                </div>
                <UsersItem
                    deleteUser={deleteUser}
                    users={users}
                    searchText={searchText}
                    sortedUsers={sortedUsers}
                />
                {formAction ?
                    <UsersForm
                        setAddNewUser={setAddNewUser}
                        addNewUser={addNewUser}
                        addFullUser={addFullUser}
                        setFormAction={setFormAction}
                    />
                    : null
                }
                {newReducer ? <Preloader/> : null}
            </div>
        </div>
    );
}

export default App;



