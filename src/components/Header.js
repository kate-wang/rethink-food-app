import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Fab from '@material-ui/core/Fab'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'

import rethinklogo from "./Images/rethinkfoodwhite.png"

const styles = theme => ({
  flex: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 1}px`,
  },
  logo: {
    height: "4vh"
  }
})

const Header = ({ classes }) => (
  <AppBar position='static'>
    <Toolbar>
      <img className={classes.logo} src={rethinklogo}/>
      <Typography className={classes.flex} variant='h5' color='secondary'>
        Restaurant Meal Platform
      </Typography>

      <Fab color='secondary' size='small'>
        <AddIcon />
      </Fab>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
