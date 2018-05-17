import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Contact from "../components/Contact";
import About from "../components/About";

export default class Router extends Component{

render(){
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
      );
    }
}
