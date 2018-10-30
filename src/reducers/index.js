import { combineReducers } from 'redux'
import { modalVisibility } from './modalVisibility'
import { loadLight } from './loadLight'

export default combineReducers({
  modalVisibility,
  loadLight
})
