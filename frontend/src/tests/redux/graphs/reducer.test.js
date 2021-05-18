import { graphsReducer } from '../../../redux/graphs/reducer'
import * as types from '../../../redux/graphs/types'

describe('Graphs reducers', () => {
  const data = {
    labels: ['10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
    values: [8, 10, 15, 13, 17, 18, 22, 19],
  }

  it('Should return the initial state', () => {
    const expected = {
      consumption: {},
      production: {},
    }

    expect(graphsReducer(undefined, {})).toEqual(expected)
  })

  it('Should handle FETCHED_CONSUMPTION', () => {
    const dispatchedData = {
      type: types.FETCHED_CONSUMPTION,
      payload: data,
    }

    expect(graphsReducer([], dispatchedData)).toEqual({
      consumption: data,
    })
  })

  it('Should handle FETCHED_PRODUCTION', () => {
    const dispatchedData = {
      type: types.FETCHED_PRODUCTION,
      payload: data,
    }

    expect(graphsReducer([], dispatchedData)).toEqual({
      production: data,
    })
  })
})