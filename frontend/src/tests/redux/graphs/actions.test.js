import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actionTypes from '../../../redux/graphs/actions'
import * as types from '../../../redux/graphs/types'

const mws = [thunk]
const mockStore = createMockStore(mws)
const store = mockStore({})

describe('Graphs actions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  it('Dispatches FETCHED_CONSUMPTION after fetching consumption data', () => {
    expect.assertions(2)
    const expectedResponse = [
      { datetime: '2021-05-31 10:30', labels: '10:30 AM', values: 6 },
      { datetime: '2021-05-31 11:30', labels: '11:30 AM', values: 5 },
      { datetime: '2021-05-31 12:30', labels: '12:30 PM', values: 6 },
      { datetime: '2021-05-31 13:30', labels: '1:30 PM', values: 7 },
    ]
    const mResponse = {
      json: jest.fn().mockResolvedValueOnce(expectedResponse),
    }
    global.fetch = jest.fn().mockResolvedValueOnce(mResponse)

    const expectedActions = [
      {
        type: types.FETCHED_CONSUMPTION,
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

    return store.dispatch(actionTypes.fetchConsumption()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      expect(global.fetch).toBeCalledWith('/energy/consumption', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    })
  })

  it('Dispatches FETCHED_PRODUCTION after fetching production data', () => {
    expect.assertions(2)
    const expectedResponse = [
      { datetime: '2021-05-31 10:30', labels: '10:30 AM', values: 6 },
      { datetime: '2021-05-31 11:30', labels: '11:30 AM', values: 5 },
      { datetime: '2021-05-31 12:30', labels: '12:30 PM', values: 6 },
      { datetime: '2021-05-31 13:30', labels: '1:30 PM', values: 7 },
    ]
    const mResponse = {
      json: jest.fn().mockResolvedValueOnce(expectedResponse),
    }
    global.fetch = jest.fn().mockResolvedValueOnce(mResponse)

    const expectedActions = [
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

    return store.dispatch(actionTypes.fetchProduction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      expect(global.fetch).toBeCalledWith('/energy/production', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    })
  })

  it('Dispatches FETCHED_PREDICTION after fetching prediction data', () => {
    expect.assertions(2)
    const expectedResponse = [
      { datetime: '2021-05-31 10:30', labels: '10:30 AM', value: 6 },
      { datetime: '2021-05-31 11:30', labels: '11:30 AM', value: 5 },
      { datetime: '2021-05-31 12:30', labels: '12:30 PM', value: 6 },
      { datetime: '2021-05-31 13:30', labels: '1:30 PM', value: 7 },
    ]
    const mResponse = {
      json: jest.fn().mockResolvedValueOnce(expectedResponse),
    }
    global.fetch = jest.fn().mockResolvedValueOnce(mResponse)

    const expectedActions = [
      {
        type: types.FETCHED_PREDICTION,
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

    return store.dispatch(actionTypes.fetchPrediction(4)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      expect(global.fetch).toBeCalledWith('/prediction/4', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    })
  })
})
