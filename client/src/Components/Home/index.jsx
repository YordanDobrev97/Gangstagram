import React, { Component } from 'react';
import {
    Link,
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect,
  } from "react-router-dom";

import { Container } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/core'
import { Button } from '@material-ui/core';

import Login from '../Login/index';
import Register from "../Register/index";

class Home extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Router>
                    <Link to="/" />
                    <Link to="/login" />
                    <Link to="/register" />

                    <AppBar display="flex" mb={4} position="static" color="transparent">
                    <Box>
                        <h1>
                            <a href='/'>Gangstagram</a>
                        </h1>
                    </Box>

                    <Box>
                        <Button fullWidth={false} size="medium" color="primary" href="/register">
                            Register
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth={false} size="medium" color="primary" href="/login">
                            Login
                        </Button>
                    </Box>
                </AppBar>

                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path='/'>
                            <h1>Welcome to Gangstagram, custom version of <span className="instagram">Instagram</span></h1>
                            <h2>Build with React.js and ASP.NET Core (Web API)</h2>
                            <p className="message">
                                Log in to your account, if you do not have an account you can create one
                            </p>
                            <img width="420" height="280" src="https://www.tapeteos.pl/data/media/943/big/instagram_010_social_media__logo.jpg"/>
                        </Route>
                    </Switch>
                </Router>
          </Container>
        )
    }
}

export default Home;