import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addUserActionCreator, deleteUserActionCreator, sortedUsersAc} from "./Redux/Reducers/usersReducer";
import {getCustomers} from "./API/asyncActions/users";
import React, {useState} from "react";
import MyButton from "./UI/Button/MyButton";
import Container from "./Components/Container/Container";



function App() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    const preloader = useSelector(state => state.preloader.loaded)
    const firstLoad = useSelector(state => state.preloader.firstLoad)
    const [formAction, setFormAction] = useState(false)

    // Sorting || sorting - selector
    // const sorting = useSelector(state => state.user.sortedUsers)
    // const testSorting =
    //     useSelector(state => state.user.sortedUsers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)))
    // //

    const [sortingToggle, setSortingToggle] = useState(false)
    const sortedUsers = () => {
        setSortingToggle(!sortingToggle)
        sortingToggle ?
            dispatch(sortedUsersAc(users.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)).map((i) => i)))
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
    const addFullUser = e => {
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
        address: '',
        city: '',
        state: '',
        zip: '',
        description: ''
    })

    return (
        <div className="App">
            <div className="App-wrapper">
                <div className='buttonsBlock'>
                    <MyButton onClick={() => dispatch(getCustomers())} myClass={'smallDataBtn'}>Small data</MyButton>
                    <MyButton onClick={getFormOnclick} myClass={'openFormBtn'}>New user</MyButton>
                </div>
                {
                    firstLoad ?
                        <Container
                            deleteUser={deleteUser}
                            sortedUsers={sortedUsers}
                            addFullUser={addFullUser}
                            users={users}
                            searchText={searchText}
                            setMoreInfo={setMoreInfo}
                            setAddNewUser={setAddNewUser}
                            addNewUser={addNewUser}
                            setFormAction={setFormAction}
                            moreInfo={moreInfo}
                            formAction={formAction}
                            preloader={preloader}
                        />
                        : null
                }
            </div>
        </div>
    );
}

export default App;



