import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles'
import Header from './Header'
//import firebase from './Firebase/firebase'
import AuthManager from './Firebase/AuthManager'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
})

const SignUp = props => {
  const { classes } = props
  const [restaurantName, setRestaurantName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [addressStreet, setAddressStreet] = React.useState("");
  const [addressCity, setAddressCity] = React.useState("");
  const [addressState, setAddressState] = React.useState("");
  const [addressZipcode, setAddressZipcode] = React.useState("");

  // Handle submit to create new account.
  function handleSubmit(e) {
    e.preventDefault();
    if (checkEmail() == false) {
      alert("Invalid Email Address");
    }

    let auth = new AuthManager();
    auth.createUserWithEmailAndPassword(emailAddress, emailAddress, password);
    auth.createRestaurant(restaurantName, emailAddress, phoneNumber, addressStreet, addressCity, addressState, addressZipcode);
  }

  function checkEmail() {
    if (emailAddress.includes("@") && emailAddress.includes(".")) {
      return true;
    }
    return false
  }

  return (
    <Fragment>
    <Header />
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Create Account
        </Typography>
        <form className={classes.form} onSubmit={e => handleSubmit(e)}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='text'>Restaurant Name</InputLabel>
            <Input name='restaurant-name' type='string' id='restaurant-name' value={restaurantName} onChange={event => setRestaurantName(event.target.value)}/>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>Email Address</InputLabel>
            <Input id='email' name='email' autoComplete='email' value={emailAddress} onChange={event => setEmailAddress(event.target.value)}/>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input name='password' type='password' id='password' autoComplete='current-password' value={password} onChange={event => setPassword(event.target.value)}/>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='text'>Phone Number</InputLabel>
            <Input name='phone-number' type='string' id='phone-number' value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)}/>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='text'>Restaurant Address</InputLabel>
            <Input name='address' type='string' id='address' value={addressStreet} onChange={event => setAddressStreet(event.target.value)}/>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='text'>City</InputLabel>
            <Input name='city' type='string' id='city' value={addressCity} onChange={event => setAddressCity(event.target.value)}/>
          </FormControl>
          <FormControl margin='normal' required style={{width: '40%', marginRight:'10%'}}>
            <InputLabel>State</InputLabel>
            <Select id="state-select" value={addressState} onChange={event => setAddressState(event.target.value)}>
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={"AL"}>AL</MenuItem>
              <MenuItem value={"AK"}>AK</MenuItem>
              <MenuItem value={"AZ"}>AZ</MenuItem>
              <MenuItem value={"AR"}>AR</MenuItem>
              <MenuItem value={"CA"}>CA</MenuItem>
              <MenuItem value={"CO"}>CO</MenuItem>
              <MenuItem value={"CT"}>CT</MenuItem>
              <MenuItem value={"DE"}>DE</MenuItem>
              <MenuItem value={"FL"}>FL</MenuItem>
              <MenuItem value={"GA"}>GA</MenuItem>
              <MenuItem value={"HI"}>HI</MenuItem>
              <MenuItem value={"ID"}>ID</MenuItem>
              <MenuItem value={"IL"}>IL</MenuItem>
              <MenuItem value={"IN"}>IN</MenuItem>
              <MenuItem value={"IA"}>IA</MenuItem>
              <MenuItem value={"KS"}>KS</MenuItem>
              <MenuItem value={"KY"}>KY</MenuItem>
              <MenuItem value={"LA"}>LA</MenuItem>
              <MenuItem value={"ME"}>ME</MenuItem>
              <MenuItem value={"MD"}>MD</MenuItem>
              <MenuItem value={"MA"}>MA</MenuItem>
              <MenuItem value={"MI"}>MI</MenuItem>
              <MenuItem value={"MN"}>MN</MenuItem>
              <MenuItem value={"MS"}>MS</MenuItem>
              <MenuItem value={"MO"}>MO</MenuItem>
              <MenuItem value={"MT"}>MT</MenuItem>
              <MenuItem value={"NE"}>NE</MenuItem>
              <MenuItem value={"NV"}>NV</MenuItem>
              <MenuItem value={"NH"}>NH</MenuItem>
              <MenuItem value={"NJ"}>NJ</MenuItem>
              <MenuItem value={"NM"}>NM</MenuItem>
              <MenuItem value={"NY"}>NY</MenuItem>
              <MenuItem value={"NC"}>NC</MenuItem>
              <MenuItem value={"ND"}>ND</MenuItem>
              <MenuItem value={"OH"}>OH</MenuItem>
              <MenuItem value={"OK"}>OK</MenuItem>
              <MenuItem value={"OR"}>OR</MenuItem>
              <MenuItem value={"PA"}>PA</MenuItem>
              <MenuItem value={"RI"}>RI</MenuItem>
              <MenuItem value={"SC"}>SC</MenuItem>
              <MenuItem value={"SD"}>SD</MenuItem>
              <MenuItem value={"TN"}>TN</MenuItem>
              <MenuItem value={"TX"}>TX</MenuItem>
              <MenuItem value={"UT"}>UT</MenuItem>
              <MenuItem value={"VT"}>VT</MenuItem>
              <MenuItem value={"VA"}>VA</MenuItem>
              <MenuItem value={"WA"}>WA</MenuItem>
              <MenuItem value={"WV"}>WV</MenuItem>
              <MenuItem value={"WI"}>WI</MenuItem>
              <MenuItem value={"WY"}>WY</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin='normal' required >
            <InputLabel htmlFor='text'>Zip Code</InputLabel>
            <Input name='zipcode' type='string' id='zipcode' value={addressZipcode} onChange={event => setAddressZipcode(event.target.value)}/>
          </FormControl>
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Create Account
          </Button>
        </form>
      </Paper>
    </main>
    </Fragment>
  )
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignUp)
