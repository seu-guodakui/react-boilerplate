import 'whatwg-fetch'
import 'core-js/fn/array/find'
import 'core-js/fn/object/values'
import 'core-js/fn/string/starts-with'
import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import Routes from './components/Routes'
import configureStore from './store'

if (!window.Promise) {
  window.Promise = Promise
}

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
