import React from 'react';

const CharComponent = props => {
    return (
        <div className="CharComponent" onClick={props.onClick}>
            {props.letter}
        </div>
    );
};

export default CharComponent;