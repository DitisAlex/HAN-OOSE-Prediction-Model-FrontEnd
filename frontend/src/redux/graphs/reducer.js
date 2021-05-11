import * as types from './types'

const INITIAL_STATE = {
  production: {},
  consumption: {},
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const graphsReducer = reducer
