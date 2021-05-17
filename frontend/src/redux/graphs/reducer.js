import * as types from './types'

const INITIAL_STATE = {
  production: {},
  consumption: {},
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCHED_CONSUMPTION:
      return {...state, consumption: action.payload}
    default:
      return state
  }
}

export const graphsReducer = reducer
