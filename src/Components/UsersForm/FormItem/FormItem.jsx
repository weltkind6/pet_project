import React from 'react';
import classes from "../UsersForm.module.css";
import Input from "../../../UI/Input/Input";

const FormItem = props => {

    return (
        <div className={classes.formItem}>
            <label>{props.label}</label>
            <Input
                placeholder={props.ph}
                onChange={props.onChange}
                type={props.type}
            />
        </div>
    );
};

export default FormItem;