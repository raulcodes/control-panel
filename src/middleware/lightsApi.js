const lightsApiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'light_api') {
    return next(action);
  }

  const { url } = action.meta;
  const fetchOptions = Object.assign({}, action.meta)
  fetch(url, fetchOptions)
    .then(resp => resp.json())
    .then(json => {
      if (json.results) {
        let data = json.results[0]
        store.dispatch({
          type: 'TOGGLE_LIGHT',
          payload: {
            id: data.id,
            toggle: !(fetchOptions.toggle)
          }
        })
      }
      else {
        let data = json[0]
        store.dispatch({
          type: 'LOAD_LIGHT',
          payload: {
            id: data.id,
            toggle: (data.power === 'on' ? true : false),
            brightness: data.brightness
          }
        })
      }
    })

  next(action);
}

export default lightsApiMiddleware;
