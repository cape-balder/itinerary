import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from 'fast-redux'
import * as serviceWorker from './serviceWorker'
import './index.css'

// import App from './containers/App'
import App from './App'

const preloadedState = {
  locations: {
    marker: {
      from: 'KOHLIFE.COM',
      fromTerminal: {
        coordinate: {
          lat: '13.740596',
          lng: '100.562926'
        }
      }
    }
  }
}
const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)
serviceWorker.unregister()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
