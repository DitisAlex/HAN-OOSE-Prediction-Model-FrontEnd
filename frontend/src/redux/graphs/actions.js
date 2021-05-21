import React from 'react'
import * as types from './types'

export const fetchConsumption = () => {
    let url = '/energy/consumption'

    return (dispatch) => {
        return fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                var tempObj = {
                    labels: [],
                    values: []
                } 
                res.forEach(element => {
                    tempObj.labels.push(element.labels);
                    tempObj.values.push(element.values);
                });
                return dispatch({
                    type: types.FETCHED_CONSUMPTION,
                    payload: tempObj,
                })
            })
    }
}

export const fetchProduction = () => {
    let url = '/energy/production'

    return (dispatch) =>
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                var tempObj = {
                    labels: [],
                    values: []
                } 
                res.forEach(element => {
                    tempObj.labels.push(element.labels);
                    tempObj.values.push(element.values);
                });
                return dispatch({
                    type: types.FETCHED_PRODUCTION,
                    payload: tempObj,
                })
            })
            .catch((err) => {
                console.log('Failed to fetch production data', err)
            })
}

export const filterConsumption = (filtered) => (getState) => {
    const data = getState().graphs.consumption;
    Object.entries(data).forEach(([key,value]) => {
        if(value === filtered){
            data.labels.pop(key); //todo correct de label verwijderen.
        }
    })

    return {type: types.FILTER_CONSUMPTION, payload: filtered}
}
