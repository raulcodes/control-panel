const defaultState = {
  visibility: false,
  currentLight: {
    lightId: null
  }
}

export const modalVisibility = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        visibility: true,
        currentLight: action.payload
      }
    case 'HIDE_MODAL':
      return {
        visibility: false,
        currentLight: {
          lightId: null
        }
      }
    default:
      return state
  }
}
