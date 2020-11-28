import React from 'react';
import './Auxiliary.css';

const Auxiliary = (props) => {
    return (
        <div className="bg">
            {props.children}
        </div>
    )
};

export default Auxiliary;
