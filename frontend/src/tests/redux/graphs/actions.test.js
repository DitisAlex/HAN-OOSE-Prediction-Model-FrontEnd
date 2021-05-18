import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actionTypes from '../../../redux/graphs/actions'
import * as types from '../../../redux/graphs/types'

const mws = [thunk]
const mockStore = createMockStore(mws)
const store = mockStore({})

describe('Graphs actions', () => {
  it('Dispatches FETCHED_CONSUMPTION after fetching consumption data', () => {
    expect.assertions(2)
    const mJson = {
      labels: [
        '10AM',
        '11AM',
        '12AM',
        '1PM',
        '2PM',
        '3PM',
        '4PM',
        '5PM',
        '6PM',
      ],
      values: [8, 10, 15, 13, 17, 18, 22, 19],
    }
    const mResponse = { json: jest.fn().mockResolvedValueOnce(mJson) }
    global.fetch = jest.fn().mockResolvedValueOnce(mResponse)

    const expectedActions = [
      {
        type: types.FETCHED_CONSUMPTION,
        payload: {
          labels: [
            '10AM',
            '11AM',
            '12AM',
            '1PM',
            '2PM',
            '3PM',
            '4PM',
            '5PM',
            '6PM',
          ],
          values: [8, 10, 15, 13, 17, 18, 22, 19],
        },
      },
    ]

    return store.dispatch(actionTypes.fetchConsumption()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      expect(global.fetch).toBeCalledWith('/consumption', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    })
  })
})