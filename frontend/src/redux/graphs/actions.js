import * as types from './types'

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

export const fetchProduction = () => {
    let url = '/production'

    return (dispatch) =>
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((json) => {
                return dispatch({
                    type: types.FETCHED_PRODUCTION,
                    payload: json,
                })
            })
            .catch((err) => {
                console.log('Failed to fetch production data', err)
            })
}
