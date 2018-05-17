import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        console.log('In home page');
    }


    render() {
        return (
            <div>
                <h1>Home</h1>
                <img alt={'logo'} src={'assets/images/banner-image.jpg'} />
            </div>
        )
    }
}

export default Home;
