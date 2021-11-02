import React from 'react';
import './UsersForm.module.css'
import classes from './UsersForm.module.css';
import FormItem from "./UsersItem/FormItem";

const UsersForm = ({setAddNewUser, addNewUser, addFullUser}) => {
    return (
        <form className={classes.form}>
                <strong>Add new user</strong>
            <FormItem
                label={'First name'}
                ph={'first name'}
                type={'text'}
                onChange={e => setAddNewUser({...addNewUser, firstName: e.target.value})}
            />
            <FormItem
                label={'Last name'}
                ph={'last name'}
                type={'text'}
                onChange={e => setAddNewUser({...addNewUser, lastName: e.target.value})}
            />
            <FormItem
                label={'Email'}
                ph={'example@yahoo.com'}
                type={'email'}
                onChange={e => setAddNewUser({...addNewUser, email: e.target.value})}
            />
            <FormItem
                label={'Phone number'}
                ph={'953-170-3737'}
                type={'tel'}
                onChange={e => setAddNewUser({...addNewUser, phone: e.target.value})}
            />
            <button
                type='submit'
                onClick={addFullUser}
                className="btn btn-light">
                Add customer
            </button>
        </form>
    );
};

export default UsersForm;