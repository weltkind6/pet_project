import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addUserActionCreator, deleteUserActionCreator, sortedUsersAc} from "./Redux/Reducers/usersReducer";
import {getCustomers} from "./API/asyncActions/users";
import React, {useState} from "react";
import MyButton from "./UI/Button/MyButton";
import Container from "./Components/Container/Container";
import useInput from "./hooks/useInput";
import {bigDataUrl, smallDataUrl} from "./API/API";


function App() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    const preloader = useSelector(state => state.preloader.loaded)
    const firstLoad = useSelector(state => state.preloader.firstLoad)
    const [formAction, setFormAction] = useState(false)

    // Sorting Можно для сортирвки написать функцию
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

    // Add new user
    const name = useInput()
    const lastName = useInput()
    const email = useInput()
    const phone = useInput()

    const newUser = {
        firstName: name.user,
        lastName: lastName.user,
        email: email.user,
        phone: phone.user,
        address: '',
        city: '',
        state: '',
        zip: '',
        description: ''
    }
    const addNewUser = e => {
        e.preventDefault()
        dispatch(addUserActionCreator({
            ...newUser, id: Date.now()
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
                    <MyButton
                        onClick={() => dispatch(getCustomers(smallDataUrl))}
                        myClass={'smallDataBtn'}>Small data
                    </MyButton>
                    <MyButton
                        onClick={getFormOnclick}
                        myClass={'openFormBtn'}>New user
                    </MyButton>
                    <MyButton
                        onClick={() => dispatch(getCustomers(bigDataUrl))}
                        myClass={'bigDataBtn'}>Big data
                    </MyButton>
                </div>
                {
                    firstLoad ?
                        <Container
                            deleteUser={deleteUser}
                            sortedUsers={sortedUsers}
                            addNewUser={addNewUser}
                            users={users}
                            searchText={searchText}
                            setMoreInfo={setMoreInfo}
                            setFormAction={setFormAction}
                            moreInfo={moreInfo}
                            formAction={formAction}
                            preloader={preloader}
                            sortingToggle={sortingToggle}
                            name={name}
                            lastName={lastName}
                            email={email}
                            phone={phone}
                        />
                        : null
                }
            </div>
        </div>
    );
}

export default App;



