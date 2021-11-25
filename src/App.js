import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addUserActionCreator, deleteUserActionCreator, sortedUsersAc} from "./Redux/Reducers/usersReducer";
import {getCustomers} from "./API/asyncActions/users";
import UsersItem from "./Components/UsersItem/UsersItem";
import React, {useState} from "react";
import UsersForm from "./Components/UsersForm/UsersForm";
import MyButton from "./UI/Button/MyButton";
import Preloader from "./UI/Preloader/Preloader";
import MoreData from "./Components/MoreData/MoreData";




function App() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    const newReducer = useSelector(state => state.preloader.loaded)
    const [formAction, setFormAction] = useState(false)

    // Sorting || sorting - selector
    const sorting = useSelector(state => state.user.sortedUsers)
    console.log(sorting)

    // Redux sorting with selectors
    const testSorting =
        useSelector(state => state.user.sortedUsers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)))
    //

    const [sortingToggle, setSortingToggle] = useState(false)
    const sortedUsers = () => {
        setSortingToggle(!sortingToggle)
        sortingToggle ? dispatch(sortedUsersAc(users.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)).map((i) => i)))
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
    // Show full info
    const [moreInfo, setMoreInfo] = useState({
        id: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: ''
    })

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
                    testSorting={testSorting}
                    setMoreInfo={setMoreInfo}
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
                <MoreData
                    users={users}
                    moreInfo={moreInfo}
                />
            </div>
        </div>
    );
}

export default App;



