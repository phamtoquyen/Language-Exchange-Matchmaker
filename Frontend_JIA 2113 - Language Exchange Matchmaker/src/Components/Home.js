import React from "react";
import '../Styles/Common.css'; 
import { useNavigate } from "react-router-dom";
import logo from "../Styles/logo.png";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';



function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Language Exchange MatchMaker</h1>
            <div className="d-grid gap-2">
            <img src={logo} alt="logo" class="center" />
            <ButtonGroup vertical className="d-grid gap-2">
                <Button variant="success" onClick={() => {navigate("/login");}}>Login</Button>
                <Button variant="success" onClick={() => {navigate("/register");}}>register</Button>
             </ButtonGroup>;
             </div>
            
        </div>
    );
}
export default Home;