import { combineReducers } from 'redux'

import { graphsReducer } from './graphs/reducer'

const rootReducer = combineReducers({
  graphs: graphsReducer,
})

export default rootReducer
