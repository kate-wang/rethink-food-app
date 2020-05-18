import React, { Component, Fragment } from 'react'

import Header from './Header'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import placeholder from './Images/placeholder.png'

const styles = theme => ({
  hero: {
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 5}px`,
  },
  about: {
    padding: '100px',
    margin: '100px'
  },
})

// const preventDefault = (event) => event.preventDefault();

const RestaurantHome = props => {
  const { classes } = props

  return (
    <Fragment>
      <Header />
      <Typography variant='h3' color='primary'
      //className={styles.about}
      >
        Restaurant Home Page
      </Typography>
      <Button variant="contained">CREATE LOG</Button>
      <Typography variant='h4'color='secondary'>
        Previous Log Entries
      </Typography>
      <Typography variant='h4'color='secondary'>
        Dashboard
      </Typography>
      <Typography variant='h4'color='secondary'>
        Media
      </Typography>
    </Fragment>
  )
}

      //<img src={placeholder} />;
      
// class RestaurantHome extends Component {
//   render () {
//     return (
//       <Fragment>
//         <Header />
//         Restaurant Home Page
//       </Fragment>
//     )
//   }
// }

export default RestaurantHome
