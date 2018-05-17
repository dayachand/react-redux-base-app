import React, { Component } from 'react';

import ReduxToastr from 'react-redux-toastr';
import Router from '../../config/router';
import { connect } from "react-redux";

class Layout extends Component {
    /**
     * Switch layout based on the current url
     * @returns {*}
     */
    switchLayout() {
           return (
                <div className="auth-pages">
                    <div className="row">
                        <a href={'home'}>Home</a>
                        <a href={'about'}>About</a>
                        <a href={'contact'}>Contact</a>
                        <Router />
                    </div>
                    <ReduxToastr
                        timeOut={5000}
                        newestOnTop={false}
                        preventDuplicates
                        position="bottom-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar />
                </div>
            )
    }

    /**
     * Render the component
     * @returns {*}
     */
    render() {
        return (
            this.switchLayout()
        );
    }
}

//Connect action to component
export default connect(null)(Layout)
