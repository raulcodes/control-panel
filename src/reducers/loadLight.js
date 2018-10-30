import lights from '../data/light_data.js'

export const loadLight = (state = lights, action) => {
  switch (action.type) {
    case 'LOAD_LIGHT':
      return state.map((item, i) => {
        if (item.id !== action.payload.id) {
          return item
        }
        return {
          ...item,
          ...action.payload
        }
      })
    case 'TOGGLE_LIGHT':
      console.log('state')
      console.log(action.payload)
      return state.map((item, i) => {
        if (item.id !== action.payload.id) {
          return item
        }
        else {
          return {
            ...item,
            ...action.payload
          }
        }
      })
    default:
      return state
  }
}
