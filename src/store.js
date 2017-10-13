import { compose, createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const configureStore = (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(reducers, composeEnhancers(
    applyMiddleware(reduxThunk)
  ))

  if (module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept(
      './reducers',
      () => store.replaceReducer(reducers)
    )
  }

  return store
}

export default configureStore