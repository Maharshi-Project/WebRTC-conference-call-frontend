import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import logo from '../resources/logo.png';
import UsernameInput from './components/Usernameinput';
import SubmitButton from './components/SubmitButton';

import { registerNewUser, checkRoomId }  from '../utils/wssConnection/wssConnection';
import { setUsername } from '../store/actions/dashboardActions';

import * as webRtcHandler from '../utils/webRTC/webRTCHandler';
import * as webRTCGroupHandler from '../utils/webRTC/webRTCGroupCallHandler';
import Peer from 'peerjs';

import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import RoomInput from './components/RoomInput';

const LoginPage = ({ saveUsername }) => {

  useEffect(() => {
    // Initialize Peer
    const myPeer = new Peer();

    // Get local stream and connect with peer
    webRtcHandler.getLocalStream();
    webRTCGroupHandler.connectWithMyPeer(myPeer); // pass myPeer to your connection handler
  }, []);


  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();


  const handleSubmitButtonPressed = () => {
    registerNewUser(username);
    saveUsername(username);
    checkRoomId(roomId);
    navigate(`/dashboard/${roomId}`);
  };

  return (
    <div className='login-page_container background_main_color'>
      <div className='login-page_login_box background_secondary_color'>
        <div className='login-page_logo_container'>
          <img className='login-page_logo_image' src={logo} alt='VideoTalker' />
        </div>
        <div className='login-page_title_container'>
          <h2>VIDEO CHAT</h2>
        </div>
        <UsernameInput username={username} setUsername={setUsername} />
        <RoomInput roomId={roomId} setRoomId={setRoomId} />
        <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
      </div>
      <footer> <small>&#9400; Copyright 2024, Maharshi Patel</small> </footer>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: username => dispatch(setUsername(username))
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
