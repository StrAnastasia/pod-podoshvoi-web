import React, { useEffect, useRef, useState } from "react";

import firebase from "firebase/app";
import "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../ChatMessage/ChatMessage";
import axios from "axios";

export default function Chat() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyCtPbYjq1VPSnTlsfvfNs3pexwlEAYjDmk",
      authDomain: "coral-environs-313608.firebaseapp.com",
      databaseURL:
        "https://coral-environs-313608-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "coral-environs-313608",
      storageBucket: "coral-environs-313608.appspot.com",
      messagingSenderId: "906103886088",
      appId: "1:906103886088:web:170f033b43145029a15cbd",
    });
  }
  const firestore = firebase.firestore();
  const dummy = useRef();
  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES

  useEffect(() => {
    axios.get("/auth/current-session").then(({ data }) => {
      setAuth(data);
    });
  }, []);

  // getting the message and sorting them by time of creation
  const [formValue, setFormValue] = useState("");
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt", "asc").limitToLast(10);

  const [messages] = useCollectionData(query, { idField: "id" });
  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("allo");
    await messagesRef.add({
      body: formValue,
      user: auth.nickname,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          marginTop: "3vh",
          color: "white",
          border: "1px solid",
          borderColor: "orange",
          borderRadius: 8,
          width: "40vw",
        }}
      >
        <div className="profileBackground" />
        <div>
          {messages &&
            messages.map((msg) => {
              // console.log(msg);
              return (
                <ChatMessage
                  nickname={auth.nickname}
                  key={msg.id}
                  message={msg}
                />
              );
            })}
          <span ref={dummy}></span>
        </div>

        {/* Form to type and submit messages */}
        <form
          onSubmit={sendMessage}
          style={{
            marginTop: "3vh",
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <input
            className="form-control"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Пукни в чат"
          />
          <button className="btn btn-dark" type="submit" disabled={!formValue}>
            Пукнуть
          </button>
        </form>
      </div>
    </div>
  );
}
