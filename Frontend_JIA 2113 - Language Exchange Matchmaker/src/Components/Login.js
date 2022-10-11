import React, { Component } from 'react';
import './Login.scss';
import {handleLoginApi} from '../Services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMessage: ''
        }
    }

    handleOnChangeUserInput = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleOnClick = async() => {
        this.setState({
            errMessage: ''
        })

        try{
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0){
            this.setState({
                errMessage: data.message
            })
            }
            if (data && data.errCode == 0){
            // todo when login successfull!
            console.log("Login Successfull!")
            }
        }catch(error){
            if (error.response){
                if (error.response.data){
                    this.setState({
                        errMessage: error.response.data.message
                    })

                }
            }
        }
    }
    render() {
    //JSX

        return (
        <div>
            <div className= 'login-background'>
                <div className= 'login-container'>
                    <div className= 'login-content '>
                        <div className= 'col-12 text-login'> Login</div>
                            <div className='col-12 form-group login-input' >
                                <label className="user-text">Username: </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter your username'
                                    value = {this.state.username}
                                    onChange = {(event) => this.handleOnChangeUserInput(event)}
                                />
                            </div>
                        <div className='col-12 form-group login-input'>
                            <label className="password-text">Password: </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your password'
                                value = {this.state.password}
                                onChange = {(event) => this.handleOnChangePassword(event)}
                                />
                        </div>
                        <div className='col-12'>
                            <div className='col-12' style= {{color: 'red'}}>
                                {this.state.errMessage}
                            </div>
                            <button
                                className='btn-login'
                                onClick = {() => this.handleOnClick()}
                                >Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}



export default Login;