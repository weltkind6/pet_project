import './MoreData.css'
import React from 'react';

const MoreData = ({moreInfo}) => {

    return (
        <div className='container'>
            <div>FirstName: {moreInfo.name}</div>
            <div>LastName: {moreInfo.surname}</div>
            <div>Email: {moreInfo.email}</div>
            <div>Address: {moreInfo.address.city}</div>
        </div>
    );
};

export default MoreData;