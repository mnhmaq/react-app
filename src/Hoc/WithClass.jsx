import React from 'react';

const WithClass = (props) => {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    );
}

export default WithClass;