import React, {Component} from 'react';
import ApplicationViews from './components/ApplicationViews';
import Nav from './components/nav/Nav';
import Login from './components/auth/Login'
import './App.css';

class App extends Component {
  state = {
    user: localStorage.getItem("credentials") !== null
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null


  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    localStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  render() {
    return(
      <>
        {this.state.user ?
          <>
            <Nav />
            <ApplicationViews />
          </>
          :
          <Login setUser={this.setUser} />
        }
      </>
    )
  }
}

export default App;
