import React from 'react';

const Header = ({choices}) => {
    return (
        <div className={'header'}>
            {choices.map(choice => <span key={choice}>{choice}</span>)}
        </div>
    )
};

export default Header;
