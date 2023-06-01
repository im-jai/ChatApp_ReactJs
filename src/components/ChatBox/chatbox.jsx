import React, { Component } from "react";
import "../ChatBox/chatbox.css";
import ChatList from "../ChatList/chatList.jsx";
import ChatContent from "../ChatContent/chatContent.jsx";
import UserProfile from "../UserProfile/userProfile.jsx";

export default class ChatBox extends Component {
  render() {
    return (
      <div className="main__chatbox">
        <ChatList></ChatList>
        <ChatContent></ChatContent>
        <UserProfile></UserProfile>
      </div>
    );
  }
}
