import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../Database/firebase.js";
import "./Styles/Body.css";

function Body() {
    var [messages, setMessages] = useState([]);
    var [refresh, setRefresh] = useState("Refresh");

    useEffect(() => {
        reload();
    },[]);

    const reload = async () => {
        console.log("Refreshing");
        setRefresh("Refreshing");
        var temp = [];
        const querySnapshot = await getDocs(collection(db, "messages"));
        querySnapshot.forEach((doc) => {
            temp.push(doc.data());
        });
        setMessages(temp);
        setRefresh("Refresh");
    };

    return (
        <div className="bodyDiv">
            <div className="messagesDiv">
                {messages.map((message,i) => {
                    return (
                        <div className="message" key={i}>
                            <span >{message.message}</span>
                            <AlwaysScrollToBottom />
                        </div>
                    );
                })}
            </div>
            <button className="refreshDiv" onClick={reload}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 489.533 489.533"
                    className="refreshIcon"
                    width="20"
                    height="20"
                >
                    <path
                        d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9   l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6   c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6   C49.575,418.961,150.875,501.261,268.175,488.161z"
                        fill="#0A56D0"
                    />
                </svg>
                <span className="refreshText">{refresh}</span>
            </button>
        </div>
    );
}

export default Body;

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
};