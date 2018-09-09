import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/cheese';
import {Provider} from 'react-redux';
import CheeseList from './components/cheese-list.js';
import './index.css';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <CheeseList />
    </Provider>,
    document.getElementById('root')
);

