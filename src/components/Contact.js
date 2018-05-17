import React, { Component } from 'react';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        console.log('In Contact page');
    }


    render() {
        return (
            <div>
                <h1>Contact</h1>
                <img alt={'logo'} src={'assets/images/dammy-audio.jpg'} />
            </div>
        )
    }
}

export default Contact;