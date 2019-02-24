import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Board from './Board'
import './index.css'

ReactDOM.render(<Board count={50} />, document.getElementById('root'))
registerServiceWorker()