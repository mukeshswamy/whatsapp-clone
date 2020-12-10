import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert, SearchOutlined } from "@material-ui/icons";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";
import MessageRoundedIcon from "@material-ui/icons/MessageRounded";
import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  const [room, setRooms] = useState();
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeRoundedIcon />
          </IconButton>
          <IconButton>
            <MessageRoundedIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search of start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {room?.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
