import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter  } from 'react-router-dom';
import Home from './Home';
import Secret from './Secret';
import Login from './Login';
import withAuth from './withAuth';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter >
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/secret">Secret</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/secret" component={withAuth(Secret)} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </BrowserRouter >
        );
    }
}