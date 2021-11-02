import React from 'react';
import './UsersForm.module.css'
import classes from './UsersForm.module.css';
import FormItem from "./UsersItem/FormItem";
import Close from "../../UI/Close/Close";
import MyButton from "../../UI/Button/MyButton";

const UsersForm = ({setAddNewUser, addNewUser, addFullUser, setFormAction}) => {
    return (
        <form className={classes.form}>
            <Close setFormAction={setFormAction}/>
            <h5 className={classes.formTitle}>Add new user</h5>
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
            <MyButton onClick={addFullUser} myClass={classes.formButton}>Add user</MyButton>
        </form>
    );
};

export default UsersForm;