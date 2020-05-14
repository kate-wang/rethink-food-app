import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Fab from '@material-ui/core/Fab'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import rethinklogo from "./Images/rethinkfoodwhite.png"

const styles = theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing.unit * 2
    },
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 1}px`,
  },
  flex: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 1}px`,
  },
  logo: {
    height: "4vh"
  },
  submit: {
    marginTop: theme.spacing.unit * 1
  }
})

const CollisionPracticesLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/covid-practices" {...props} />
));

const CollisionLandingLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/" {...props} style={{ textDecoration:'none' }} />
));

const Header = ({ classes }) => (
  <AppBar position='static'>
    <Toolbar>
      <img className={classes.logo} src={rethinklogo}/>
      <Typography
        className={classes.flex}
        variant='h5'
        color='secondary'
        component={CollisionLandingLink}
      >
        Restaurant Meal Platform
      </Typography>

      <Typography className={classes.root}>
        <Button component={CollisionPracticesLink} color='secondary'>
          Covid19 Practices
        </Button>
      </Typography>

      <Fab color='secondary' size='small'>
        <AddIcon />
      </Fab>
    </Toolbar>
  </AppBar>

)

export default withStyles(styles)(Header)
