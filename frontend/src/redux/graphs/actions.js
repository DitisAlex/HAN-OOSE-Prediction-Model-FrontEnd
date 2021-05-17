import * as types from './types'

export const fetchConsumption = () => (dispatch) => {
    let url = '/';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    // .then((response) => {
    //     return response.json()
    // })
    .then((response) => {
        console.log(response)
        dispatch({
            type: types.FETCHED_CONSUMPTION,
            payload: "test",
        })
    }).catch((err) => {
        console.log('Failed to fetch consumption data', err)
    })
}