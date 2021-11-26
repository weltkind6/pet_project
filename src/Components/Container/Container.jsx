import React from 'react';
import UsersItem from "../UsersItem/UsersItem";
import UsersForm from "../UsersForm/UsersForm";
import Preloader from "../../UI/Preloader/Preloader";
import MoreData from "../MoreData/MoreData";

const Container = props => {

    return (
        <>
            <UsersItem
                deleteUser={props.deleteUser}
                users={props.users}
                searchText={props.searchText}
                sortedUsers={props.sortedUsers}
                setMoreInfo={props.setMoreInfo}
            />

            {props.formAction ?
                <UsersForm
                    setAddNewUser={props.setAddNewUser}
                    addNewUser={props.addNewUser}
                    addFullUser={props.addFullUser}
                    setFormAction={props.setFormAction}
                />
                : null
            }
            {
                props.preloader ? <Preloader/>
            : <MoreData users={props.users} moreInfo={props.moreInfo}/>
            }

        </>
    );
};

export default Container;