import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

const rootEl = document.getElementById('app')

const render = () => ReactDOM.render(
  <Counter
  />,
  rootEl
)

render()
