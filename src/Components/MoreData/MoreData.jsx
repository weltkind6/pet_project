import './MoreData.css'
import React from 'react';

const MoreData = ({moreInfo}) => {


    return (
        <div className='content'>
            <div><b>ID:</b> {moreInfo.id}</div>
            <div><b>FirstName:</b> {moreInfo.name}</div>
            <div><b>LastName:</b> {moreInfo.surname}</div>
            <div><b>Email:</b> {moreInfo.email}</div>
            <div><b>Phone:</b> {moreInfo.phone}</div>
            <h5>Address:</h5>
            <div><b>Street:</b> {moreInfo.address.streetAddress}</div>
            <div><b>City:</b> {moreInfo.address.city}</div>
            <div><b>State:</b> {moreInfo.address.state}</div>
            <div><b>Zip:</b> {moreInfo.address.zip}</div>
            <div><b>Description:</b> {moreInfo.description}</div>
        </div>
    );
};

export default MoreData;
