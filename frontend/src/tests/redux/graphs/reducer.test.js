import { graphsReducer } from '../../../redux/graphs/reducer'
import * as types from '../../../redux/graphs/types'

describe('Graphs reducers', () => {
  const data = [
    {
      type: types.FETCHED_PRODUCTION,
      payload: {
        labels: ['10:30 AM', '11:30 AM', '12:30 PM', '1:30 PM'],
        values: [6, 5, 6, 7],
        datetime: [
          '2021-05-31 10:30',
          '2021-05-31 11:30',
          '2021-05-31 12:30',
          '2021-05-31 13:30',
        ],
      },
    },
  ]

  it('Should return the initial state', () => {
    const expected = {
      production: {},
      consumption: {},
      prediction: {},
    }

    expect(graphsReducer(undefined, {})).toEqual(expected)
  })

  it('Should handle FETCHED_CONSUMPTION', () => {
    const dispatchedData = {
      type: types.FETCHED_CONSUMPTION,
      payload: data,
    }

    expect(graphsReducer([], dispatchedData)).toEqual({
      consumption: data
    })
  })

  it('Should handle FETCHED_PRODUCTION', () => {
    const dispatchedData = {
      type: types.FETCHED_PRODUCTION,
      payload: data,
    }

    expect(graphsReducer([], dispatchedData)).toEqual({
      production: data
    })
  })

  it('Should handle FETCHED_PREDICTION', () => {
    const dispatchedData = {
      type: types.FETCHED_PREDICTION,
      payload: data,
    }

    expect(graphsReducer([], dispatchedData)).toEqual({
      prediction: data,
    })
  })
})
