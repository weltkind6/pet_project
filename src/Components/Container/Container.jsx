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
                sortingToggle={props.sortingToggle}
                currentUser={props.currentUser}
            />

            {props.formAction ?
                <UsersForm
                    setAddNewUser={props.setAddNewUser}
                    addNewUser={props.addNewUser}
                    setFormAction={props.setFormAction}
                    name={props.name}
                    lastName={props.lastName}
                    email={props.email}
                    phone={props.phone}
                />
                : null
            }
            {
                props.preloader ? <Preloader/>
                    : <MoreData moreInfo={props.moreInfo}/>
            }

        </>
    );
};

export default Container;