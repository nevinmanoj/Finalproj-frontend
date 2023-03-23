import "./chat.css";
import Topbar from "../../components/topbar/Topbar";


import React, { useState } from "react";

function Chat() {
    const [items, setItems] = useState([
        {
            'data': 'Hey',
            'timestamp': 1679515500846,
            "username": "Oliver Khan",
            'id': 1
        },
        {
            'data': 'Hi',
            'timestamp': 1679515500848,
            "username": "Neha James",
            'id': 2
        },
        {
            'data': 'Sup?',
            'timestamp': 1679515500850,
            "username": "Oliver Khan",
            'id': 1
        },
        {
            'data': 'Good',
            'timestamp': 1679515500852,
            "username": "Neha James",
            'id': 2
        }
    ]);

    const handleAddItem = () => {
        var x = document.getElementById("inp").value;
        var date = Date.now();
        setItems([...items, {
            'data': x,
            'timestamp': date,
            "username": "Neha James",
            'id': 2
        }]);
    };

    return (

        <div>
            <Topbar />

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item['username']}:{item['data']}</li>
                ))}
            </ul>
            <input type="text" id="inp" />
            <button onClick={handleAddItem}>Send</button>
        </div>
    );
}

export default Chat;
