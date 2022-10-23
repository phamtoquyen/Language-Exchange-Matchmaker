import React from "react";
import './LogoutConfirmationPage.scss';

import { useNavigate } from "react-router-dom";
import logo from "../Styles/logo.png";
import Button from 'react-bootstrap/Button';

/**
Direct to Dashboard Page when onClick No
*/

function LogoutConfirmationPage() {
    const navigate = useNavigate();

    return (
         <div className=" col-12 screen-Background">
            <div className="screen-Container">
                <div className="screen-Content">
                    <h6>Are you sure you want to logout ?</h6>
                        <div className="action_btn">
                              <Button  className="btn-yes"onClick={() => {navigate("/");}}>Yes</Button>
                              <Button className="btn-no" onClick={() => {navigate("/Dashboard");}}>No</Button>
                        </div>
                </div>
            </div>
         </div>
    );
}
export default LogoutConfirmationPage;