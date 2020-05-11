import React, { Component, Fragment } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import SignIn from './SignIn'

class LandingPage extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        This is the landing page with sign-in on it!
        <SignIn />
      </Fragment>
    )
  }
}

export default LandingPage
