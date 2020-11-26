import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import Header from "./header";
// import Footer from "./footer";
import About from "./About";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class LoginPage extends Component {
    constructor() {
        super();
        this.handleForSubmit=this.handleForSubmit.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.state = {
            username: "",
            password: "",
            isChecked: false
        }
    }


    handleForSubmit(e) {
        e.preventDefault();
        const postData = {
            username:this.state.username,
            password:this.state.password

            // username: "river92@example.org",
            // password: "12345678"
        }
        axios.post('/api/login', postData)
            .then(response => {
                console.log(response.data)
                this.props.history.push('/expenses');
            })


    }
    //
    // handleChecked() {
    //     this.setState({isChecked: !this.state.isChecked});
    // }
    passwordChange(e) {
        this.setState({ password: e.target.value });
    }
    emailChange(e) {
        this.setState({ username: e.target.value });
    }
    render() {
        // const {username,password,isChecked}=this.state;
        return (
            <div>
                <Router>
                    <Route exect path='/about' component={About}/>
                </Router>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-">
                            <h1><b>Login Form</b></h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <form onSubmit={this.handleForSubmit}>
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-12">
                                    <input type="text"
                                           name="email"
                                           className="form-control"
                                           placeholder="Email"
                                           value={this.state.username}
                                           onChange={this.emailChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Password</label>
                                <div className="col-sm-12">
                                    <input type="password"
                                           className="form-control"
                                           placeholder="Password"
                                           value={this.state.password}
                                           onChange={this.passwordChange}
                                    />
                                </div>
                            </div>
                            {/*<div className="form-group row">*/}
                            {/*    <div className="form-check col-sm-12">*/}
                            {/*        <input type="checkbox"*/}
                            {/*               className="form-check-input"*/}
                            {/*               checked={this.state.isChecked}*/}
                            {/*               onChange={() => this.handleChecked()}*/}
                            {/*        />*/}
                            {/*        <label className="form-check-label" onClick={() => this.handleChecked()}>Remember*/}
                            {/*            Me </label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="form-group row">
                                <div className="col-sm-10">
                                  <button type="submit" className="btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default LoginPage;


