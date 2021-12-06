import React from 'react';
import './UsersForm.module.css'
import classes from './UsersForm.module.css';
import Close from "../../UI/Close/Close";
import MyButton from "../../UI/Button/MyButton";
import FormItem from "./FormItem/FormItem";


const UsersForm = ({addNewUser, setFormAction, name, lastName, email, phone}) => {

    return (
        <form className={classes.form}>
            <Close setFormAction={setFormAction}/>
            <h5 className={classes.formTitle}>Add new user</h5>
            <FormItem value={name} holder={'First name'} label={'First name'}/>
            <FormItem value={lastName} holder={'Last name'} label={'Last name'}/>
            <FormItem value={email} holder={'Email'} label={'Email'}/>
            <FormItem value={phone} holder={'Phone'} label={'Phone'}/>
            <MyButton
                onClick={addNewUser}
                myClass={classes.formButton}>
                Add user
            </MyButton>
        </form>
    );
};

export default UsersForm;