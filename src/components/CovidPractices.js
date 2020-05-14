import React, { Component, Fragment } from 'react'

import Link from '@material-ui/core/Link'
import Header from './Header'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import landingimg from './Images/wavylanding.svg'

const styles = theme => ({
  hero: {
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 5}px`,
  },
  about: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 9}px`,
  },
})

const preventDefault = (event) => event.preventDefault();

const CovidPractices = props => {
  const { classes } = props

  return (
    <Fragment>
      <Header />
      <Typography
        variant='h3'
        color='primary'
        className={classes.about}
      >
        Covid-19 Food Safety Guidelines
        <Typography
          variant='h6'
          color='secondary'
        >
        This page provides a brief overview of guidelines in addition
        to resources for food safety.

        </Typography>
      </Typography>


    </Fragment>
  )
}

export default withStyles(styles)(CovidPractices)
