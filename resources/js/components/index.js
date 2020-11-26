import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./header";
import Footer from "./footer";
// import About from "./About";
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Redirect} from "react-router-dom";
import axios from 'axios';

class Index extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header/>

                    <Footer/>

                </div>
            </div>
        );
    }
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index/>, document.getElementById('app'));
}
