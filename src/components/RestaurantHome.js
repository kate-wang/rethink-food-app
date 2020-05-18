import React, { Component, Fragment } from 'react'
import Header from './Header'
import AuthManager from './Firebase/AuthManager'

class RestaurantHome extends Component {
  constructor(props) {
    super(props);
    let authManager = new AuthManager();
    let auth = authManager.getAuth();
    console.log(auth.currentUser);
    this.state = {
      showLoginAlert: false,
      user: auth.currentUser,
    }
  }

  // Upon mount, pull user's friends to populate friendslist
componentDidMount() {
  if(this.state.user == null) {
    alert("please log in");
    this.props.history.push("/")
    return;
  }

}

  render () {
    return (
      <Fragment>
        <Header />
        Restaurant Home Page
      </Fragment>
    )
  }
}

export default RestaurantHome
