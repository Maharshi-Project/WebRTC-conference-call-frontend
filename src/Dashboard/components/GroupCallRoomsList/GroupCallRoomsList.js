import React, {useEffect} from 'react';
import GroupCallRoomsListItem from './GroupCallRoomsListItem';
import { connect } from 'react-redux';
import './GroupCallRoomsList.css';

const GroupCallRoomsList = (props) => {
  const { groupCallRooms, groupCallActive } = props;
  useEffect(() => {
    // This effect will run every time groupCallActive changes
    console.log('GroupCallActive changed:', groupCallActive);
  }, [groupCallActive]);

  return (
    <>
    {console.log("Group Call Active : ", groupCallActive)}
    {!groupCallActive && groupCallRooms.map(room => {
    console.log("Room ID:", room.roomId);
    console.log("Room:", room);
    return <GroupCallRoomsListItem key={room.roomId} room={room} />;
    })}
    </>
  );
};

const mapStoreStateToProps = ({ dashboard }) => (
  {
    ...dashboard
  }
);

export default connect(mapStoreStateToProps)(GroupCallRoomsList); // Corrected export statement
