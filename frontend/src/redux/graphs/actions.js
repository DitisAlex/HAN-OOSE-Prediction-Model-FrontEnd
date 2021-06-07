import * as types from './types'

export const fetchConsumption = () => {
  const url = '/energy/consumption'

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
          type: types.FETCHED_CONSUMPTION,
          payload: tempObj,
        })
      })
      .catch((err) => {
        console.log('Failed to fetch consumption data', err)
      })
}

export const fetchProduction = () => {
  const url = '/energy/production'

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
        res.forEach((datapoint) => {
          tempObj.labels.push(datapoint.labels)
          tempObj.values.push(datapoint.values)
          tempObj.datetime.push(datapoint.datetime)
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

export const fetchPrediction = (hours) => {
  const url = `/prediction/${hours}`

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
          tempObj.values.push(element.value)
          tempObj.datetime.push(element.datetime)
        })

        return dispatch({
          type: types.FETCHED_PREDICTION,
          payload: tempObj,
        })
      })
      .catch((err) => {
        console.log('Failed to fetch prediction data', err)
      })
}
