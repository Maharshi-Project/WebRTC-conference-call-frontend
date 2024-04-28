import React, { useEffect } from 'react';
import logo from '../resources/logo.png';
import ActiveUsersList from './components/ActiveUsersList/ActiveUsersList';
import * as webRTCHandler from '../utils/webRTC/webRTCHandler';
import * as webRTCGroupHandler from '../utils/webRTC/webRTCGroupCallHandler';
import DirectCall from './components/DirectCall/DirectCall';
import { connect } from 'react-redux';
import DashboardInformation from './components/Dashboardinformation/Dashboardinformation';
import { callStates } from '../store/actions/callActions';
import GroupCallRoomsList from './components/GroupCallRoomsList/GroupCallRoomsList';
import GroupCall from './components/GroupCall/GroupCall';
import './Dashboard.css';
import Peer from 'peerjs'; // Import PeerJS library
import LocalVideoView from './components/LocalVideoView/LocalVideoView';

const Dashboard = (props) => {
  const {
    localStream,
    remoteStream,
    callState,
    callerUsername,
    callingDialogVisible,
    callRejected,
    hideCallRejectedDialog,
    setDirectCallMessage,
    message,
    username
  } = props;

  return (
    <div className='dashboard_container background_main_color'>
      <LocalVideoView localStream={localStream} />
      <div className='dashboard_left_section'>
        <div className='dashboard_content_container'>
          <GroupCall />
          {callState !== callStates.CALL_IN_PROGRESS && <DashboardInformation username={username} />}
        </div>
        
      </div>
      <div className='dashboard_right_section background_secondary_color'>
        
        <div className='dashboard_logo_container'>
          <img className='dashboard_logo_image' src={logo} alt='logo' />
        </div>
      </div>
      <footer> <small>&#9400; Copyright 2024, Maharshi Patel  </small> </footer>
    </div>
  );
};

const mapStateToProps = ({ call, dashboard }) => ({
  ...call,
  ...dashboard
});

export default connect(mapStateToProps)(Dashboard);
