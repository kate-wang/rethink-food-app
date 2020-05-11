import React, { Component, Fragment } from 'react'
import LandingPage from './LandingPage'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Account from './Account'
import PasswordForgot from './PasswordForgot'
import Admin from './Admin'
import RestaurantHome from './RestaurantHome'
import CovidPractices from './CovidPractices'
import AccountSettings from './AccountSettings'
import EditLog from './EditLog'
import ViewLog from './ViewLog'
import CreateLog from './CreateLog.js'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import * as ROUTES from '../constants/routes'

class App extends Component {
  render () {
    return (
      <Router>
        <Fragment>
          <Route exact path={ROUTES.LANDING_PAGE} component={LandingPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.ACCOUNT} component={Account} />
          <Route exact path={ROUTES.PASSWORD_FORGOT} component={PasswordForgot} />
          <Route exact path={ROUTES.ADMIN} component={Admin} />
          <Route exact path={ROUTES.RESTAURANT_HOME} component={RestaurantHome} />
          <Route exact path={ROUTES.COVID_PRACTICES} component={CovidPractices} />
          <Route exact path={ROUTES.ACCOUNT_SETTINGS} component={AccountSettings} />
          <Route exact path={ROUTES.CREATE_LOG} component={CreateLog} />
          <Route exact path={ROUTES.EDIT_LOG} component={EditLog} />
          <Route exact path={ROUTES.VIEW_LOG} component={ViewLog} />
        </Fragment>
      </Router>
    )
  }
}

export default App
