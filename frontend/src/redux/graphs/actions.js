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

export const fetchPrediction = (hours) => {
  let url = "/prediction/" + hours;

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

export const setHours = (hours, type) => {
  return (dispatch, getState) => {
    let data = ''
    if (type === 'production') {
      data = getState().graphs.production
    } else if (type === 'consumption') {
      data = getState().graphs.consumption
    }

    let earliestDate = new Date()
    earliestDate.setHours(earliestDate.getHours() - 4)

    let newObject = {
      labels: [],
      values: [],
      datetime: [],
    }


    for (let i = 0; i < data.labels?.length; i++) {
      const dataPointDate = new Date(data.datetime[i])

      if (earliestDate < dataPointDate) {
        newObject.labels.push(data.labels[i])
        newObject.values.push(data.values[i])
        newObject.datetime.push(data.datetime[i])
      }
    }

    if (newObject.labels.length === 1) {
      newObject.labels.push(newObject.labels[0])
      newObject.values.push(newObject.values[0])
      newObject.datetime.push(newObject.values[0])
    }

    return dispatch({
      type: types.SET_HOURS,
      payload: { type: type, selected: newObject },
    })
  }
}
