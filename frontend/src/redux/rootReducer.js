import { combineReducers } from 'redux'

import { graphsReducer } from './cards/reducer'

const rootReducer = combineReducers({
  graphs: graphsReducer,
})

export default rootReducer
