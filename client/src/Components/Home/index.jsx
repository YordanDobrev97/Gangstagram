import React, { Component, Fragment } from 'react';
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
import Feeds from '../Feed/all';
import CreatePost from '../Post/create';
import Details from '../Feed/details';

import UserContext from '../../UserContext';

import Cookies from "universal-cookie";
const cookies = new Cookies();

class Home extends Component {
    
    state = {
        isAuthentication: cookies.get('userId') || false,
        isClickCreatePost: false,
    };

    static contextType = UserContext

    isLoggedUser = (isLogged) => {
        this.setState({
            isAuthentication: isLogged,
        });
    }

    createPost = () => {
        this.setState({
            isClickCreatePost: true
        });
    }

    render() {
        if (this.state.isClickCreatePost) {
            return (<Redirect to='/createPost'/>)
        }

        return (
            <Container maxWidth="lg">
                <Router>
                    <Link to="/" />
                    <Link to="/login" />
                    <Link to="/register" />
                    <Link to="/feeds" />
                    <Link to="/feed/:id" />
                    <Link to="/createPost" />

                    <AppBar display="flex" mb={4} position="static" color="transparent">
                    
                    <Box>
                        <h1>
                            <a href='/'>Gangstagram</a>
                        </h1>
                        {this.context.isAuth ? (
                            <p>Hello, {this.context.username}</p>
                        )  : (
                            <React.Fragment></React.Fragment>
                        )}
                    </Box>
                    

                    {this.state.isAuthentication ? (
                        <Box textAlign='center'>
                            <Button onClick={this.createPost.bind(this)} style={{Width: '50px',}} variant="contained" color="primary" component="span">
                                Add Post
                            </Button>
                        </Box>
                    ) : (
                        <Fragment>
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
                        </Fragment>
                    )}
                </AppBar>

                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/feeds">
                            <Feeds />
                        </Route>
                        <Route path="/feed/:id" render={(props) => {
                            return <Details id={props.match.params.id} />
                        }}>
                        </Route>
                        <Route path="/createPost">
                            <CreatePost />
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