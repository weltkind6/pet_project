import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addUserActionCreator, deleteUserActionCreator} from "./store/usersReducer";
import {getCustomers} from "./API/asyncActions/users";
import UsersItem from "./Components/UsersItem/UsersItem";
import React, {useState} from "react";
import UsersForm from "./Components/UsersForm/UsersForm";


function App() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.user.userCount)
    const [formAction, setFormAction] = React.useState(false)
    console.log()

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
            <button
                type="button"
                onClick={() => dispatch(getCustomers())}
                className="btn btn-warning">Small data
            </button>
            <UsersItem deleteUser={deleteUser} users={users}/>
            {formAction ?
                <UsersForm
                    setAddNewUser={setAddNewUser}
                    addNewUser={addNewUser}
                    addFullUser={addFullUser}
                    setFormAction={setFormAction}
                />
                : null
            }
            <button onClick={getFormOnclick}>Open form</button>
        </div>
    );
}

export default App;



