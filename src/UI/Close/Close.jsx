import React from 'react';
import './Close.css'

const Close = ({setFormAction}) => {
    return <div onClick={() => setFormAction(false)} className='close'/>
};

export default Close;