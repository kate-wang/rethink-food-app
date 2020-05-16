import React, { Component, Fragment } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import SignIn from './SignIn'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import { typography } from '@material-ui/system';

import { Link } from 'react-router-dom'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded'

import withStyles from '@material-ui/core/styles/withStyles'

import landingimg from './Images/wavylanding.svg'

const styles = theme => ({
  bg: {
    height: "100vh",
    backgroundImage: "url(" + landingimg + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    resizeMode:'contain'
  },
  hero: {
    padding: `${theme.spacing.unit * 10}px ${theme.spacing.unit * 12}px`,
  },
  about: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 9}px ${theme.spacing.unit * 4}px`,
  },
  h3: {
    fontWeight: '900',
  },
})

const LandingPage = props => {
  const { classes } = props

  return (
      <Fragment>
        <Header />
        <Grid container className={classes.bg}>
          <Grid item xs={7} className={classes.hero}>
            <Typography
              variant='h3'
              color='primary'
              gutterBottom
              className={classes.h3}
            >
              Rethink Restaurant Response Program
            </Typography>
            <Typography
              color="secondary"
              variant="body1"
              gutterBottom
            >
              Reinvigorating the restaurant economy while providing meals for those in need.
              Learn more below!
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <SignIn />
          </Grid>
          <Grid item xs={3}>
          </Grid>

        </Grid>
        <Grid container>
          <Typography
            variant='h3'
            color='primary'
            className={classes.about}
          >
            About the Program
            <Typography
              variant='body1'
              color='secondary'
            >
            Rethink Food NYC Inc is a non-profit organization that utilizes
            food excess from restaurants, grocery stores, and corporate
            kitchens to create new and nutritious meals for those in need.

            In response to the unprecedented demand for food and simultaneous
            restaurant closings due to the Covid-19 outbreak, Rethink launched
            the "Restaurant Response Program" as an emergency food response.
            This program provides select restaurants with grants to reopen
            their doors and create meals for people in need.

            Visit rethinkfood.nyc for more info.
            </Typography>
          </Typography>
        </Grid>

      </Fragment>
  )
}

export default withStyles(styles)(LandingPage)
