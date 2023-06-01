import "./App.css";
import Navbar from "./components/Navbar/navbar.jsx";
import ChatBox from "./components/ChatBox/chatbox.jsx";

function App() {
  return (
    <div className="__main">
      <Navbar></Navbar>
      <ChatBox></ChatBox>
    </div>
  );
}

export default App;
