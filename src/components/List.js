import React, {useState} from 'react';
import Header from './Header';
import Item from './Item';

const List = ({items}) => {
    const [choices, setChoices] = useState([]);

    const handleOnListItemClick = item => {
        setChoices([...toggleChoice(item)]);
    };

    const toggleChoice = choice => {
        const index = choices.indexOf(choice);

        index === -1
            ? choices.push(choice)
            : choices.splice(index, 1);

        return choices;
    };

    const isChosen = item => choices.includes(item);

    return (
        <>
            <Header choices={choices}/>

            <ul className='List'>
                {items.map(item => (
                    <Item
                        key={item.name}
                        item={item}
                        onClick={handleOnListItemClick}
                        isChosen={isChosen(item.name)}/>
                ))}
            </ul>
        </>
    )
};

export default List;
