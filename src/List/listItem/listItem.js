import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const listItem = (props) => {
    return (
        <Auxiliary>
            {props.inputs}
            <br />
        </Auxiliary>
    );
}

export default listItem;