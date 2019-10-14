import React from 'react';

const Item = ({item, isChosen, onClick}) => {
    return (
        <li key={item.name}
            className={`List__item List__item--${item.color}${isChosen ? ' List__item--is-chosen' : ''}`}
            onClick={() => onClick(item.name)}>
            {item.name}
        </li>
    );
};

export default Item;
