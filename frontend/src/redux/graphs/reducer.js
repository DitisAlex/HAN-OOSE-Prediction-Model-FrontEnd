import * as types from './types'

const INITIAL_STATE = {
  production: {},
  consumption: {},
  prediction: {},
  selectedProduction: {},
  selectedConsumption: {},
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCHED_CONSUMPTION:
      return {
        ...state,
        consumption: action.payload,
        selectedConsumption: action.payload,
      }

    case types.FETCHED_PRODUCTION:
      return {
        ...state,
        production: action.payload,
        selectedProduction: action.payload,
      }

    case types.FETCHED_PREDICTION:
      return {
        ...state,
        prediction: action.payload
      }

    case types.SET_HOURS:
      if (action.payload.type === 'production') {
        return { ...state, selectedProduction: action.payload.selected }
      } else if (action.payload.type === 'consumption') {
        return { ...state, selectedConsumption: action.payload.selected }
      } else {
        return { ...state }
      }

    default:
      return state
  }
}

export const graphsReducer = reducer