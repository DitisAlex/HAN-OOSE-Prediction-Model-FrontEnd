import * as types from './types'

const INITIAL_STATE = {
  production: {},
  consumption: {},
  prediction: {}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCHED_CONSUMPTION:
      return {
        ...state,
        consumption: action.payload,
      }

    case types.FETCHED_PRODUCTION:
      return {
        ...state,
        production: action.payload,
      }

    case types.FETCHED_PREDICTION:
      return {
        ...state,
        prediction: action.payload
      }

    default:
      return state
  }
}

export const graphsReducer = reducer
