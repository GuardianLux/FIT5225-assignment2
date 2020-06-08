import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Routes from "./Routes";
import IconButton from '@material-ui/core/IconButton';
import { AppContext } from './libs/contextLib'    // using context to get state from different components
import { Auth } from "aws-amplify"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  const [isAuthenticated, userHasAuthenticated] = useState(false)   // add session to state
  const [isAuthenticating, setIsAuthenticating] = useState(true)    // load state from session

  // useEffect(() => {
  //   // console.log(isAuthenticated)
  //   onLoad()
  // }, [])

  // async function onLoad {
  //   try {
  //     await Auth.currentSession()
  //     userHasAuthenticated(true)
  //   } catch(e) {
  //     if (e !== 'No current user') {
  //       alert(e)
  //     }
  //   }
  //   setIsAuthenticating(false)
  // }

  // handle logout, logout button appears after sign in
  function handleLogout(e) {
    e.preventDefault()
    userHasAuthenticated(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Tag Store
          </Typography>
          {isAuthenticated
            ? <Button color="inherit" href="/" onClick={handleLogout}>Logout</Button>
            : <>
              <Button color="inherit" href="/SignIn">Sign In</Button>
              <Button color="inherit" href="/SignUp">Sign Up</Button>
            </>
          }
        </Toolbar>
      </AppBar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}