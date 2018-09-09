import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CheeseList from './components/cheese-list.js';
import './index.css';

ReactDOM.render(
    <CheeseList cheeses={[
        "Bath Blue",
        "Barkham Blue",
        "Buxton Blue"
    ]} />,
    document.getElementById('root')
);

