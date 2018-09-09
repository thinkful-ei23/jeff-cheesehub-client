import React from 'react';


export default function CheeseList (props) {
    const listedCheeses = props.cheeses.map((cheese, i) => {
        return (<li key={i}>{cheese}</li>)
    });
    return (
        <ul>
            {listedCheeses}
        </ul>
    );
}

