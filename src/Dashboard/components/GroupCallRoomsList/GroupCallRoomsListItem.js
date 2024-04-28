// import React from 'react';
const webRTCGroupCallHandler=require( '../../../utils/webRTC/webRTCGroupCallHandler');
const React = require('react');

const GroupCallRoomsListItem = ({ room }) => {
  const handleListItemPressed = () => {
    console.log("\nGroupCallRoomListItem.js: handleListItemPressed: room: "+ room.socketId+" "+room.roomId+"\n");
    webRTCGroupCallHandler.joinGroupCall(room.socketId, room.roomId);
  };

  return (
    <div onClick={handleListItemPressed} className='group_calls_list_item background_main_color'>
      <span>{room.hostName}</span>
    </div>
  );
};

export default GroupCallRoomsListItem;
