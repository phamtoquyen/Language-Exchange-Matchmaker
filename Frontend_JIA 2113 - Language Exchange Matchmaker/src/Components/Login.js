import React, { Component } from 'react';
import './Login.scss';
import { Button } from 'react-bootstrap';

class Login extends Component {

    render() {
        return (
        <div>
            <div className= 'login-background'>
                <div className= 'login-container'>
                    <div className= 'login-content '>
                        <div className= 'col-12 text-login'> Login</div>
                        <div className='col-12 form-group login-input' >
                            <label className="user-text">Username: </label>
                            <input type='text' className='form-control' placeholder='Enter your username'/>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label className="password-text">Password: </label>
                            <input type='text' className='form-control' placeholder='Enter your password'/>
                        </div>
                        <div className='col-12'>
                            <button className='btn-login'>Login</button>
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