import React, { Component, Fragment } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import SignIn from './SignIn'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
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
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 9}px`,
  },
  about: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 9}px`,
  },
})

const LandingPage = props => {
  const { classes } = props

  return (
      <Fragment>
        <Header />
        <Grid container className={classes.bg} spacing={3}>
          <Grid item xs={12} sm={6} className={classes.hero}>
            <Typography
              variant='h3'
              color='primary'
            >
              Rethink Food Restaurant Response Program
            </Typography>
            <Typography
              variant='h6'
              color='secondary'
            >
              Stimulating the restaurant economy while providing meals for those in need.
              Learn more by scrolling down below!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SignIn />
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
              variant='h6'
              color='secondary'
            >
            Lorem ipsum dolor sit amet, ius denique indoctum disputando ei. Cu labitur dignissim sed. Senserit consetetur te qui. In mutat nostrud salutatus quo. Pro ne hendrerit maiestatis reprehendunt, wisi accusam luptatum cu mel, his et aperiam quaeque praesent.
            </Typography>
          </Typography>

        </Grid>

      </Fragment>
  )
}

export default withStyles(styles)(LandingPage)
