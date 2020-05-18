import React, { Component, Fragment } from 'react'

import Header from './Header'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'

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

const AccountSettings = props => {
  const { classes } = props

  return (
    <Fragment>
      <Header />

      <Grid container direction="column">
        <Grid container direction="row" justify="space-around" alignItems="stretch">
          <Grid item xs={12} sm ={6}>
            <Typography variant='h3' color='primary'
            //className={classes.about}
            >
              My Account Settings
            </Typography>
          </Grid>
          <Grid item xs={1} sm ={1}>
            <Button variant="contained">EDIT</Button>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant='h4'color='secondary'>
            Account Info
          </Typography>
        </Grid>

        <Grid container direction="row" justify="space-evenly">
          <Grid item xs={2}>
            <Grid container direction="column" alignItems="flex-end">
              <Typography variant='body1' color='secondary'>
                Name
              </Typography>
              <Typography variant='body1' color='secondary'>
                Email
              </Typography>
              <Typography variant='body1' color='secondary'>
                Phone Number
              </Typography>
              <Typography variant='body1' color='secondary'>
                Restaurant Name
              </Typography>
              <Typography variant='body1' color='secondary'>
                Location
              </Typography>
              <Typography variant='body1' color='secondary'>
                Social Media
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={5}>
            <Grid container direction="column">
              <Typography variant='body1'>
                Input Name
              </Typography>
              <Typography variant='body1'>
                Input Email
              </Typography>
              <Typography variant='body1'>
                Input Phone Number
              </Typography>
              <Typography variant='body1'>
                Input Restaurant Name
              </Typography>
              <Typography variant='body1'>
                Input Location
              </Typography>
              <Typography variant='body1'>
                Input Social Media
              </Typography>
            </Grid>
          </Grid>
        </Grid>

      <Grid item>
        <Typography variant='h4' color='secondary'>
          General Settings
        </Typography>
      </Grid>

      <Grid container direction="row" justify="space-evenly">
        <Grid item xs={2}>
          <Grid container direction="column" alignItems="flex-end">
            <Typography variant='body1' color='secondary'>
              Time Zone
            </Typography>

            <Typography variant='body1' color='secondary'>
              Temperature Unit
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={5}>
          <Grid container direction="column" alignItems="flex-start">
            <Typography variant='body1'>
              Set Time Zone
            </Typography>

            <Typography variant='body1'>
              Set Temperature Unit
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
    </Fragment>
  )
}

// class AccountSettings extends Component {
//   render () {
//     return (
//       <Fragment>
//         <Header />
//         Account Settings Page
//       </Fragment>
//     )
//   }
// }

export default AccountSettings
