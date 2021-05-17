import * as types from './types'
const port = 5000;
const serverHostname = `${window.location.hostname}:${port}`;
const serverFetchBase = `${window.location.protocol}//${serverHostname}`;

export const fetchConsumption = () => (dispatch) => {
    let url = 'http://localhost:5000/';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response)
        dispatch({
            type: types.FETCHED_CONSUMPTION,
            payload: response,
        })
    }).catch((err) => {
        console.log('Failed to fetch consumption data', err)
    })
}