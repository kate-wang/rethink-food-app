import React, { Component, Fragment } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import SignIn from './SignIn'

import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

import landingimg from './Images/landing.png'

const styles = theme => ({
  image: {
    height: "100vh",
    backgroundImage: "url(" + landingimg + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
  }
})

const LandingPage = props => {
  const { classes } = props

  return (
      <Fragment>
        <Header />
        <Grid container className={classes.image}>
          <SignIn />
        </Grid>
      </Fragment>
  )
}

export default withStyles(styles)(LandingPage)
