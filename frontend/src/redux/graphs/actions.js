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
          values: [],
        }
        res.forEach((element) => {
          tempObj.labels.push(element.labels)
          tempObj.values.push(element.values)
        })
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
          values: [],
          datetime: [],
        }
        res.forEach((element) => {
          tempObj.labels.push(element.labels)
          tempObj.values.push(element.values)
          tempObj.datetime.push(element.datetime)
        })
        return dispatch({
          type: types.FETCHED_PRODUCTION,
          payload: tempObj,
        })
      })
      .catch((err) => {
        console.log('Failed to fetch production data', err)
      })
}

export const setHours = (hours) => {
  return (dispatch, getState) => {
    const data = getState().graphs.production

    // only return the amount of hours that
    let earliestDate = new Date()
    earliestDate.setHours(earliestDate.getHours() - hours)

    const newObject = {
      labels: [],
      values: [],
      datetime: [],
    }

    for (let i = 0; i < data.labels.length; i++) {
      const dataPointDate = new Date(data.datetime[i])

      console.log('earliestDate', earliestDate)
      console.log('dataPointDate', dataPointDate)

      if (earliestDate < dataPointDate) {
        newObject.labels.push(data.labels[i])
        newObject.values.push(data.values[i])
        newObject.datetime.push(data.datetime[i])
      }
    }

    console.log('data', data)
    console.log('newObject', newObject)

    return dispatch({
      type: types.SET_HOURS,
      payload: hours,
    })
  }
}
