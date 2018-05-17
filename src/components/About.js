import React, { Component } from 'react';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        console.log('In about page');
    }


    render() {
        return (
            <div>
                <h1>About</h1>
                <img alt={'logo'} src={'assets/images/bg-login.jpg'} />
            </div>
        )
    }
}

export default About;
