import * as types from './types'

let test_data = {
    labels: ["10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"],
    values: [8, 10, 15, 13, 17, 18, 22, 19]
}

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
            payload: test_data,
        })
    }).catch((err) => {
        console.log('Failed to fetch consumption data', err)
    })
}