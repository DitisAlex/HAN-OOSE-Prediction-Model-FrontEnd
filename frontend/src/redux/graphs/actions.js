import * as types from './types'

let test_data = {
    labels: ["10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"],
    values: [8, 10, 15, 13, 17, 18, 22, 19]
}

export const fetchConsumption = () => {
    let url = '/consumption'

    return (dispatch) => {
        return fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((json) => {
                return dispatch({
                    type: types.FETCHED_CONSUMPTION,
                    payload: json,
                })
            })
    }
}
