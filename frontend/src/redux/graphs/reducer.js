import * as types from './types'

const INITIAL_STATE = {
  production: {},
  consumption: {},
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCHED_CONSUMPTION:
      return { ...state, consumption: action.payload }

    case types.FETCHED_PRODUCTION:
      return { ...state, production: action.payload }
      
    case types.FILTER_CONSUMPTION:
      return { ...state, filtered: action.payload }

    default:
      return state
  }
}

export const graphsReducer = reducer