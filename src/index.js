import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'

import Firebase, { FirebaseContext } from './components/Firebase'

import App from './components/App'
import './index.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { green, cyan } from '@material-ui/core/colors'
import createTypography from '@material-ui/core/Typography'

const font = "'Raleway', sans-serif"

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: '#02582d'
    },
    type: 'light'
  },
  spacing: {
    unit: 12
  },
  typography: {
    useNextVariants: true,
    fontFamily: font,
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <FirebaseContext.Provider value={new Firebase()}>
      <CssBaseline />
      <App />
    </FirebaseContext.Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
