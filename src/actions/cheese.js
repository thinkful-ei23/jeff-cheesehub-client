import {applyMiddleware as dispatch} from "redux";

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
const fetchCheesesSuccess = (cheeses) => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
const fetchCheesesError = (error) => ({
    type: FETCH_CHEESES_ERROR,
    error
});

export const fetchCheeses = () => => {
    dispatch(fetchCheesesRequest());
    return fetch(`/api/cheeses`)
        .then(res => res.json())
        .then((res) => {
            console.log(res);
            dispatch(fetchCheesesSuccess(res));
        })
        .catch((err) => {
            dispatch(fetchCheesesError(err));
        })
}
