import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './VideoPlayer';
import Button from 'react-bootstrap/Button';

const APP_ID = 'e7152fbb977b40a08d30ad8ae9a436c5';
const TOKEN = '007eJxTYKjNdnJcMv16+iPzFceWH0zP5Hxg9vLR8QVeU6d3M1ay7vBXYEg1NzQ1SktKsjQ3TzIxSDSwSDE2SEyxSEy1TDQxNks2XecQmNoQyMgwOcSEiZEBAkF8FoaczLxsBgYAklsfxA==';
const CHANNEL = 'link';

var mute = false;
var hidden = false;

const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8',
});

export const VideoRoom = () => {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === 'video') {
      setUsers((previousUsers) => [...previousUsers, user]);
    }

    if (mediaType === 'audio') {
      user.audioTrack.play()
    }
  };

  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };

  const handleMute = async(e) => {
    mute = !mute
    await localTracks[0].setEnabled(!mute)
  }

  const hide = async(e) => {
    hidden = !hidden
    await localTracks[1].setEnabled(!hidden)
  }

  useEffect(() => {
    client.on('user-published', handleUserJoined);
    client.on('user-left', handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN, null)
      .then((uid) =>
        Promise.all([
          AgoraRTC.createMicrophoneAndCameraTracks(),
          uid,
        ])
      )
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        setUsers((previousUsers) => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            audioTrack,
          },
        ]);
        client.publish(tracks);
      });

    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off('user-published', handleUserJoined);
      client.off('user-left', handleUserLeft);
      client.unpublish().then(() => client.leave());
    };
  }, []);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 200px)',
        }}
      >
        {users.map((user) => (
          <VideoPlayer key={user.uid} user={user} />
        ))}
      </div>
      <Button className="btn-mute" onClick={handleMute} >Mute</Button>
      <Button className="btn-hide" onClick={hide} >Hide Video</Button>
    </div>
  );
};
