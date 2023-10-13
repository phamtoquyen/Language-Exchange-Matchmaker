import { useState } from 'react';
import React from "react";
import './Videocall.css';
import { VideoRoom } from './VideoRoom';

function Videocall() {
  const [joined, setJoined] = useState();
  return (
    <div className="App">
      <h1>Video Call</h1>

      {!joined && (
        <button onClick={() => setJoined(true)}>
          Join Room
        </button>
      )}
      {joined && <VideoRoom />}

    </div>
  );
}

export default Videocall;
