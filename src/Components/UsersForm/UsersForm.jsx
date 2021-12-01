import React from 'react';
import './UsersForm.module.css'
import classes from './UsersForm.module.css';
import Close from "../../UI/Close/Close";
import MyButton from "../../UI/Button/MyButton";
import Input from "../../UI/Input/Input";


const UsersForm = ({addFullUser, setFormAction, name, lastName, email, phone}) => {

    return (
        <form className={classes.form}>
            <Close setFormAction={setFormAction}/>
            <h5 className={classes.formTitle}>Add new user</h5>

            <div className={classes.formItem}>
                <label>First name</label>
                <Input
                    placeholder='first name'
                    {...name}
                />
            </div>
            <div className={classes.formItem}>
                <label>Last name</label>
                <Input
                    placeholder='lastName'
                    {...lastName}
                />
            </div>
            <div className={classes.formItem}>
                <label>Email</label>
                <Input
                    placeholder='email'
                    {...email}
                />
            </div>
            <div className={classes.formItem}>
                <label>Phone</label>
                <Input
                    placeholder='tel'
                    {...phone}
                />
            </div>


            <MyButton onClick={addFullUser} myClass={classes.formButton}>Add user</MyButton>
        </form>
    );
};

export default UsersForm;