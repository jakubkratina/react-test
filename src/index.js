import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import List from "./components/List";

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to AVOID UNNECESSARY RE-RENDERS (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
    (items, size) => [
        ...items,
        ...fruits.reduce(
            (acc, fruit) => [
                ...acc,
                ...colors.reduce(
                    (acc, color) => [
                        ...acc,
                        {
                            name: `${size} ${color} ${fruit}`,
                            color,
                        },
                    ],
                    [],
                ),
            ],
            [],
        ),
    ],
    [],
);

ReactDOM.render(
    <List items={items}/>,
    document.getElementById('root')
);
