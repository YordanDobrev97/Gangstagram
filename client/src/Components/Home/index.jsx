import React, { Component } from 'react';
import {
    Link,
    Route,
    Switch,
    BrowserRouter as Router,
  } from "react-router-dom";

import { Container } from '@material-ui/core';

import Navigation from '../Navigation/index';
import Login from '../Login/index';
import Register from "../Register/index";
import Feeds from '../Feed/all';
import CreatePost from '../Post/create';
import Details from '../Feed/details';

import UserContext from '../../UserContext';

import Cookies from "universal-cookie";
const cookies = new Cookies();

class Home extends Component {
    static contextType = UserContext
    
    render() {
        return (
            <Container maxWidth="lg">
                <Router>
                    <Link to="/" />
                    <Link to="/login" />
                    <Link to="/register" />
                    <Link to="/feeds" />
                    <Link to="/feed/:id" />
                    <Link to="/createPost" />

                    <Navigation />

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