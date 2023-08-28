import React from "react";
import './LogoutConfirmationPage.scss';

import {  createSearchParams, useSearchParams, useNavigate } from "react-router-dom";
import logo from "../Styles/logo.png";
import Button from 'react-bootstrap/Button';

/**
Direct to Dashboard Page when onClick No
*/

function LogoutConfirmationPage() {
    const navigate = useNavigate();

    const[search] = useSearchParams();
    const id = search.get("id");
    const ReturnDashboard = async(e) => {
        navigate({
          pathname: "/Dashboard",
          search: createSearchParams({
              id: id
          }).toString()
      });
    }
    return (
         <div className=" col-12 screen-Background">
            <div className="screen-Container">
                <div className="screen-Content">
                    <h6>Are you sure you want to logout ?</h6>
                        <div className="action_btn">
                              <Button  className="btn-yes"onClick={() => {navigate("/");}}>Yes</Button>
                              <Button className="btn-no" onClick={ReturnDashboard}>No</Button>
                        </div>
                </div>
            </div>
         </div>
    );
}
export default LogoutConfirmationPage;