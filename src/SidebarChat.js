import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./sidebarchat.css";

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      //   Do some clever database stuff
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <div className="sidebarchat">
      <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
      <div className="sidebarchat__info">
        <h2>{name}</h2>
        <p>last message....</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
