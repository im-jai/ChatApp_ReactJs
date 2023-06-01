import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "../ChatList/chatListItems.jsx";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
