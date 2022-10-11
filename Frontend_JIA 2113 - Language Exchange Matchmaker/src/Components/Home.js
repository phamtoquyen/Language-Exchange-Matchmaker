import React from "react";
import '../Styles/Common.css'; 
import { useNavigate } from "react-router-dom";
import logo from "../Styles/logo.png";
import Button from 'react-bootstrap/Button';



function Home() {
    const navigate = useNavigate();

    return (
        <div className="screen-Background">
            <div className="screen-Container">
                <div className="screen-Content">
                <h1>Language Exchange Matchmaker</h1>
                <div className="d-grid gap-2">
                    <img src={logo} alt="logo" class="center" />
                        <div className='col-12'>
                            <Button  className="btn-Screen"onClick={() => {navigate("/login");}}>Login</Button>
                        </div>
                        <div className='col-12'>
                            <Button className="btn-Screen" onClick={() => {navigate("/register");}}>Register</Button>
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Home;