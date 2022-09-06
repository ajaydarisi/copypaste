import React, { useState } from "react";
import { db, storage } from "../Database/firebase.js";
import { doc, setDoc } from "firebase/firestore";
import "./Styles/footer.css";
import { collection, getDocs } from "firebase/firestore";


function Footer() {
  const [send, setSend] = useState("Send");
  const [message, setMessage] = useState("");
  var [messages, setMessages] = useState([]);


  const sendMessage = async () => {
    if (message) {
      setSend("Sending");
      console.log();
      await setDoc(doc(db, "messages", String(Date.now())), {
        message: message,
      }).then(() => {
        setSend("Send");
        setMessage("");
      });
    }
    var temp = [];
    const querySnapshot = await getDocs(collection(db, "messages"));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setMessages(temp);
  };

  const handleKeypress = (e) => {
    if (e.code === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="footerPage">
      <div className="writeMessage">
        <input
          className="writeMessageInput"
          type="text"
          placeholder="Write your message here!!"
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeypress}
          value={message}
        />
      </div>
      {/* <div className="uploadDiv">
        <label className="">
          <input className="upfile" type="file" accept="image/*" multiple />
          <span className="uptext">Upload</span>
          <span className="uplogo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z" />
            </svg>
          </span>
        </label>
      </div> */}
      <button className="sendDiv">
        <span className="send" onClick={sendMessage}>
          {send}
        </span>
        <span className="sendLogo" onClick={sendMessage}>
          &gt;
        </span>
      </button>
    </div>
  );
}

export default Footer;
