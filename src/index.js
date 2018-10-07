
import React from 'react'
import ReactDOM from 'react-dom'

import Q from 'kew'

import AppStore from './stores/AppStore.js'
import App from './App.js'

Q.all([
  AppStore.setup()
])
.then(function(){
  ReactDOM.render(<App />, document.getElementById('root'))
})
