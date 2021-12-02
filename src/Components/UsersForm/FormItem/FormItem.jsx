import React from 'react';
import classes from "../UsersForm.module.css";
import Input from "../../../UI/Input/Input";

const FormItem = props => {
    return (
        <div className={classes.formItem}>
            <label>First name</label>
            <Input placeholder={props.holder}{...props.value}/>
        </div>
    );
};

export default FormItem;