import React from 'react';

const ValidationComponent = props => {
    const message = props.strLen < props.minLen ? "Text too short: ": "Text long enough: ";

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default ValidationComponent;