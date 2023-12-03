import { useState, useEffect } from 'react';
import React from "react";
import './Videocall.css';
import { VideoRoom } from './VideoRoom';
import Button from 'react-bootstrap/Button';
import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom";

function Videocall() {
  const [joined, setJoined] = useState();

  const navigate = useNavigate();
  const[search] = useSearchParams();
  const id = search.get("id");
  const handleBack = async(e) => {
    navigate({
        pathname: "/Dashboard",
        search: createSearchParams({
            id: id
        }).toString()
    });
  }

  return (
    <div className="screen-Background">
      <div className="screen-Container">
        <div className="screen-Content">
          <h1>Video Call</h1>
            {!joined && (
              <Button className='btn-Screen' onClick={() => setJoined(true)}>
                Join Room
              </Button>
            )}
            {joined && <VideoRoom />}
        </div>
        <Button className="btn-help" onClick={handleBack} >back</Button>
      </div>
    </div>
  );
}

export default Videocall;
