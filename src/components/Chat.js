// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { io } from "socket.io-client";
// // // // // // // // import axios from "axios";

// // // // // // // // const socket = io("http://localhost:5000");

// // // // // // // // export default function Chat({ user, friendId }) {
// // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // //   const [text, setText] = useState("");

// // // // // // // //   useEffect(() => {
// // // // // // // //     socket.emit("join", user.userId);

// // // // // // // //     const fetchMessages = async () => {
// // // // // // // //       const res = await axios.get(`http://localhost:5000/api/messages/${user.userId}/${friendId}`);
// // // // // // // //       setMessages(res.data);
// // // // // // // //     };
// // // // // // // //     fetchMessages();

// // // // // // // //     socket.on("private_message", (msg) => {
// // // // // // // //       if (msg.sender === friendId || msg.receiver === friendId) {
// // // // // // // //         setMessages(prev => [...prev, msg]);
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     return () => socket.off("private_message");
// // // // // // // //   }, [friendId]);

// // // // // // // //   const sendMessage = () => {
// // // // // // // //     if (text === "") return;
// // // // // // // //     socket.emit("private_message", { sender: user.userId, receiver: friendId, text });
// // // // // // // //     setText("");
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <h3>Chat with {friendId}</h3>
// // // // // // // //       <div>
// // // // // // // //         {messages.map((msg, idx) => (
// // // // // // // //           <p key={idx}><b>{msg.sender === user.userId ? "You" : "Friend"}:</b> {msg.text}</p>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //       <input value={text} onChange={e => setText(e.target.value)} />
// // // // // // // //       <button onClick={sendMessage}>Send</button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { io } from "socket.io-client";
// // // // // // // // import axios from "axios";

// // // // // // // // const socket = io("http://localhost:5000");

// // // // // // // // export default function Chat({ user, friendId }) {
// // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // //   const [text, setText] = useState("");

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (!user?.userId || !friendId) return;

// // // // // // // //     socket.emit("join", user.userId);

// // // // // // // //     const fetchMessages = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await axios.get(`http://localhost:5000/api/messages/${user.userId}/${friendId}`);
// // // // // // // //         setMessages(res.data);
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Fetch messages error:", err);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //     fetchMessages();

// // // // // // // //     socket.on("private_message", (msg) => {
// // // // // // // //       if ((msg.sender === friendId && msg.receiver === user.userId) ||
// // // // // // // //           (msg.sender === user.userId && msg.receiver === friendId)) {
// // // // // // // //         setMessages((prev) => [...prev, msg]);
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     return () => {
// // // // // // // //       socket.off("private_message");
// // // // // // // //     };
// // // // // // // //   }, [user?.userId, friendId]);

// // // // // // // //   const sendMessage = () => {
// // // // // // // //     if (text.trim() === "") return;
// // // // // // // //     socket.emit("private_message", { sender: user.userId, receiver: friendId, text });
// // // // // // // //     setText("");
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={{ padding: "10px", border: "1px solid gray", width: "300px" }}>
// // // // // // // //       <h3>Chat with {friendId}</h3>
// // // // // // // //       <div style={{ height: "200px", overflowY: "scroll", border: "1px solid #ccc", marginBottom: "10px" }}>
// // // // // // // //         {messages.map((msg, idx) => (
// // // // // // // //           <p key={idx}>
// // // // // // // //             <b>{msg.sender === user.userId ? "You" : "Friend"}:</b> {msg.text}
// // // // // // // //           </p>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //       <input
// // // // // // // //         value={text}
// // // // // // // //         onChange={(e) => setText(e.target.value)}
// // // // // // // //         placeholder="Type a message..."
// // // // // // // //       />
// // // // // // // //       <button onClick={sendMessage}>Send</button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { io } from "socket.io-client";
// // // // // // // // import axios from "axios";

// // // // // // // // const socket = io("http://localhost:5000");

// // // // // // // // export default function Chat({ user, friendId }) {
// // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // //   const [text, setText] = useState("");

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (!user?.userId || !friendId) return;

// // // // // // // //     socket.emit("join", user.userId);

// // // // // // // //     const fetchMessages = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await axios.get(
// // // // // // // //           `http://localhost:5000/api/messages/${user.userId}/${friendId}`
// // // // // // // //         );
// // // // // // // //         setMessages(res.data);
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Fetch messages error:", err);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //     fetchMessages();

// // // // // // // //     socket.on("private_message", (msg) => {
// // // // // // // //       if (
// // // // // // // //         (msg.sender === friendId && msg.receiver === user.userId) ||
// // // // // // // //         (msg.sender === user.userId && msg.receiver === friendId)
// // // // // // // //       ) {
// // // // // // // //         setMessages((prev) => [...prev, msg]);
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     return () => {
// // // // // // // //       socket.off("private_message");
// // // // // // // //     };
// // // // // // // //   }, [user?.userId, friendId]);

// // // // // // // //   const sendMessage = () => {
// // // // // // // //     if (text.trim() === "") return;
// // // // // // // //     socket.emit("private_message", {
// // // // // // // //       sender: user.userId,
// // // // // // // //       receiver: friendId, // ✅ use friendId prop
// // // // // // // //       text,
// // // // // // // //     });
// // // // // // // //     setText("");
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={{ padding: "10px", border: "1px solid gray", width: "300px" }}>
// // // // // // // //       <h3>Chat with {friendId}</h3>
// // // // // // // //       <div
// // // // // // // //         style={{
// // // // // // // //           height: "200px",
// // // // // // // //           overflowY: "scroll",
// // // // // // // //           border: "1px solid #ccc",
// // // // // // // //           marginBottom: "10px",
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         {messages.map((msg, idx) => (
// // // // // // // //           <p key={idx}>
// // // // // // // //             <b>{msg.sender === user.userId ? "You" : "Friend"}:</b> {msg.text}
// // // // // // // //           </p>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //       <input
// // // // // // // //         value={text}
// // // // // // // //         onChange={(e) => setText(e.target.value)}
// // // // // // // //         placeholder="Type a message..."
// // // // // // // //       />
// // // // // // // //       <button onClick={sendMessage}>Send</button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // import axios from "axios";

// // // // // // // // export default function Chat({ user, friendId }) {
// // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // //   const [text, setText] = useState("");

// // // // // // // //   // Load messages
// // // // // // // //   const fetchMessages = async () => {
// // // // // // // //     try {
// // // // // // // //       const res = await axios.get(
// // // // // // // //         `http://localhost:5000/api/messages/${user._id}/${friendId}`
// // // // // // // //       );
// // // // // // // //       setMessages(res.data);
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error(err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchMessages();
// // // // // // // //   }, [friendId]);

// // // // // // // //   // Send message
// // // // // // // //   const sendMessage = async () => {
// // // // // // // //     if (!text.trim()) return;
// // // // // // // //     await axios.post("http://localhost:5000/api/messages", {
// // // // // // // //       senderId: user._id,
// // // // // // // //       receiverId: friendId,
// // // // // // // //       text,
// // // // // // // //     });
// // // // // // // //     setText("");
// // // // // // // //     fetchMessages(); // reload chat
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <h3>Chat</h3>
// // // // // // // //       <div style={{ height: 200, overflowY: "auto", border: "1px solid gray" }}>
// // // // // // // //         {messages.map((m) => (
// // // // // // // //           <p key={m._id}>
// // // // // // // //             <b>{m.senderId === user._id ? "You" : "Friend"}:</b> {m.text}
// // // // // // // //           </p>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //       <input
// // // // // // // //         value={text}
// // // // // // // //         onChange={(e) => setText(e.target.value)}
// // // // // // // //         placeholder="Type a message"
// // // // // // // //       />
// // // // // // // //       <button onClick={sendMessage}>Send</button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import { io } from "socket.io-client";
// // // // // // // import axios from "axios";

// // // // // // // const socket = io("http://localhost:5000");

// // // // // // // export default function Chat({ user, friend }) {
// // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // //   const [text, setText] = useState("");

// // // // // // //   useEffect(() => {
// // // // // // //     if (!user?.username || !friend?.username) return;

// // // // // // //     // Join personal room
// // // // // // //     socket.emit("join", user.userId);

// // // // // // //     // Fetch history
// // // // // // //     const fetchMessages = async () => {
// // // // // // //       try {
// // // // // // //         const res = await axios.get(
// // // // // // //           `http://localhost:5000/api/messages/${user.username}/${friend.username}`
// // // // // // //         );
// // // // // // //         setMessages(res.data);
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Fetch messages error:", err);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchMessages();

// // // // // // //     // Listen for incoming messages
// // // // // // //     socket.on("receiveMessage", (msg) => {
// // // // // // //       if (msg.sender === friend.username || msg.sender === user.username) {
// // // // // // //         setMessages((prev) => [...prev, msg]);
// // // // // // //       }
// // // // // // //     });

// // // // // // //     return () => {
// // // // // // //       socket.off("receiveMessage");
// // // // // // //     };
// // // // // // //   }, [user, friend]);

// // // // // // //   const sendMessage = async () => {
// // // // // // //     if (text.trim() === "") return;

// // // // // // //     // Realtime via socket
// // // // // // //     socket.emit("sendMessage", {
// // // // // // //       sender: user.username,
// // // // // // //       receiver: friend.username,
// // // // // // //       text,
// // // // // // //     });

// // // // // // //     // Save via REST
// // // // // // //     await axios.post("http://localhost:5000/api/messages", {
// // // // // // //       sender: user.username,
// // // // // // //       receiver: friend.username,
// // // // // // //       text,
// // // // // // //     });

// // // // // // //     setMessages((prev) => [
// // // // // // //       ...prev,
// // // // // // //       { sender: user.username, text },
// // // // // // //     ]);
// // // // // // //     setText("");
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={{ padding: "10px", border: "1px solid gray", width: "300px" }}>
// // // // // // //       <h3>Chat with {friend.username}</h3>
// // // // // // //       <div style={{ height: "200px", overflowY: "scroll", border: "1px solid #ccc", marginBottom: "10px" }}>
// // // // // // //         {messages.map((msg, idx) => (
// // // // // // //           <p key={idx}>
// // // // // // //             <b>{msg.sender === user.username ? "You" : msg.sender}:</b> {msg.text}
// // // // // // //           </p>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //       <input
// // // // // // //         value={text}
// // // // // // //         onChange={(e) => setText(e.target.value)}
// // // // // // //         placeholder="Type a message..."
// // // // // // //       />
// // // // // // //       <button onClick={sendMessage}>Send</button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }



// // // // // // import { useEffect, useState } from "react";
// // // // // // import { io } from "socket.io-client";
// // // // // // import axios from "axios";

// // // // // // const socket = io("http://localhost:5000");

// // // // // // export default function Chat({ user, friend }) {
// // // // // //   const [messages, setMessages] = useState([]);
// // // // // //   const [text, setText] = useState("");

// // // // // //   useEffect(() => {
// // // // // //     if (!user || !friend) return;

// // // // // //     socket.emit("join", user.userId);

// // // // // //     const fetchMessages = async () => {
// // // // // //       const res = await axios.get(`http://localhost:5000/api/messages/${user.userId}/${friend.userId}`);
// // // // // //       setMessages(res.data);
// // // // // //     };
// // // // // //     fetchMessages();

// // // // // //     socket.on("receiveMessage", (msg) => {
// // // // // //       if (msg.sender === friend.username || msg.receiver === user.username) {
// // // // // //         setMessages((prev) => [...prev, msg]);
// // // // // //       }
// // // // // //     });

// // // // // //     return () => socket.off("receiveMessage");
// // // // // //   }, [user, friend]);

// // // // // //   const sendMessage = () => {
// // // // // //     if (!text.trim()) return;
// // // // // //     socket.emit("sendMessage", {
// // // // // //       sender: user.userId,
// // // // // //       receiver: friend.userId,
// // // // // //       text,
// // // // // //     });
// // // // // //     setText("");
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ border: "1px solid gray", padding: "10px" }}>
// // // // // //       <h3>Chat with {friend.username}</h3>
// // // // // //       <div style={{ height: "200px", overflowY: "auto", marginBottom: "10px" }}>
// // // // // //         {messages.map((msg, idx) => (
// // // // // //           <p key={idx}>
// // // // // //             <b>{msg.sender === user.username ? "You" : msg.sender}:</b> {msg.text}
// // // // // //           </p>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //       <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..." />
// // // // // //       <button onClick={sendMessage}>Send</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import { useEffect, useState } from "react";
// // // // // import { io } from "socket.io-client";
// // // // // import axios from "axios";

// // // // // const socket = io("http://localhost:5000");

// // // // // export default function Chat({ user, friendId, friendName }) {
// // // // //   const [messages, setMessages] = useState([]);
// // // // //   const [text, setText] = useState("");

// // // // //   useEffect(() => {
// // // // //     if (!user?.userId || !friendId) return;

// // // // //     socket.emit("join", user.userId);

// // // // //     const fetchMessages = async () => {
// // // // //       try {
// // // // //         const res = await axios.get(
// // // // //           `http://localhost:5000/api/messages/${user.username}/${friendName}`
// // // // //         );
// // // // //         setMessages(res.data);
// // // // //       } catch (err) {
// // // // //         console.error("Fetch messages error:", err);
// // // // //       }
// // // // //     };
// // // // //     fetchMessages();

// // // // //     socket.on("receiveMessage", (msg) => {
// // // // //       setMessages((prev) => [...prev, msg]);
// // // // //     });

// // // // //     return () => {
// // // // //       socket.off("receiveMessage");
// // // // //     };
// // // // //   }, [user?.userId, friendId, friendName]);

// // // // //   const sendMessage = () => {
// // // // //     if (text.trim() === "") return;

// // // // //     socket.emit("sendMessage", {
// // // // //       sender: user.username,
// // // // //       receiver: friendName,
// // // // //       text,
// // // // //     });

// // // // //     setMessages((prev) => [...prev, { sender: user.username, text }]);
// // // // //     setText("");
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ padding: "10px", border: "1px solid gray" }}>
// // // // //       <h3>Chat with {friendName}</h3>
// // // // //       <div
// // // // //         style={{
// // // // //           height: "300px",
// // // // //           overflowY: "scroll",
// // // // //           border: "1px solid #ccc",
// // // // //           marginBottom: "10px",
// // // // //         }}
// // // // //       >
// // // // //         {messages.map((msg, idx) => (
// // // // //           <p key={idx}>
// // // // //             <b>{msg.sender === user.username ? "You" : friendName}:</b> {msg.text}
// // // // //           </p>
// // // // //         ))}
// // // // //       </div>
// // // // //       <input
// // // // //         value={text}
// // // // //         onChange={(e) => setText(e.target.value)}
// // // // //         placeholder="Type a message..."
// // // // //       />
// // // // //       <button onClick={sendMessage}>Send</button>
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // import { useEffect, useState } from "react";
// // // // import api from "../api/axiosInstance";

// // // // export default function Chat({ user, friendId }) {
// // // //   const [messages, setMessages] = useState([]);
// // // //   const [text, setText] = useState("");

// // // //   // Fetch conversation on load
// // // //   useEffect(() => {
// // // //     const fetchMessages = async () => {
// // // //       const res = await api.get(`/messages/${user.userId}/${friendId}`);
// // // //       setMessages(res.data);
// // // //     };
// // // //     fetchMessages();
// // // //   }, [friendId, user.userId]);

// // // //   // Send new message
// // // //   const sendMessage = async () => {
// // // //     if (!text.trim()) return;
// // // //     const res = await api.post("/messages", {
// // // //       senderId: user.userId,
// // // //       receiverId: friendId,
// // // //       text,
// // // //     });
// // // //     setMessages([...messages, res.data]);
// // // //     setText("");
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h3>Chat with {friendId}</h3>
// // // //       <div style={{ height: "200px", overflowY: "auto", border: "1px solid gray" }}>
// // // //         {messages.map((m, i) => (
// // // //           <div key={i}>
// // // //             <b>{m.senderId === user.userId ? "You" : m.senderId}:</b> {m.text}
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //       <input
// // // //         value={text}
// // // //         onChange={(e) => setText(e.target.value)}
// // // //         placeholder="Type a message..."
// // // //       />
// // // //       <button onClick={sendMessage}>Send</button>
// // // //     </div>
// // // //   );
// // // // }



// // // import { useEffect, useState } from "react";
// // // import { io } from "socket.io-client";
// // // import api from "../api/axiosInstance";

// // // const socket = io("http://localhost:5000");

// // // export default function Chat({ user, friendId }) {
// // //   const [messages, setMessages] = useState([]);
// // //   const [text, setText] = useState("");

// // //   useEffect(() => {
// // //     if (!user?.userId || !friendId) return;

// // //     socket.emit("join", user.userId);

// // //     const fetchMessages = async () => {
// // //       const res = await api.get(`/messages/${user.userId}/${friendId}`);
// // //       setMessages(res.data);
// // //     };

// // //     fetchMessages();

// // //     socket.on("receiveMessage", (msg) => {
// // //       setMessages((prev) => [...prev, msg]);
// // //     });

// // //     return () => {
// // //       socket.off("receiveMessage");
// // //     };
// // //   }, [user?.userId, friendId]);

// // //   const sendMessage = () => {
// // //     if (!text.trim()) return;

// // //     socket.emit("sendMessage", { senderId: user.userId, receiverId: friendId, text });
// // //     setMessages([...messages, { sender: { username: user.username }, text }]);
// // //     setText("");
// // //   };

// // //   return (
// // //     <div>
// // //       <h3>Chat with {friendId}</h3>
// // //       <div style={{ height: "200px", overflowY: "auto", border: "1px solid #ccc", marginBottom: "10px" }}>
// // //         {messages.map((msg, i) => (
// // //           <p key={i}>
// // //             <b>{msg.sender?.username || "You"}:</b> {msg.text}
// // //           </p>
// // //         ))}
// // //       </div>
// // //       <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..." />
// // //       <button onClick={sendMessage}>Send</button>
// // //     </div>
// // //   );
// // // }


// // import { useEffect, useState } from "react";
// // import { io } from "socket.io-client";
// // import axios from "axios";

// // const socket = io("http://localhost:5000");

// // export default function Chat({ user, friend }) {
// //   const [messages, setMessages] = useState([]);
// //   const [text, setText] = useState("");

// //   useEffect(() => {
// //     if (!user || !friend) return;

// //     // Join my private room
// //     socket.emit("join", user.userId);

// //     // Fetch previous messages
// //     const fetchMessages = async () => {
// //       try {
// //         const res = await axios.get(
// //           `http://localhost:5000/api/messages/${user.username}/${friend.username}`
// //         );
// //         setMessages(res.data);
// //       } catch (err) {
// //         console.error("Fetch messages error:", err);
// //       }
// //     };
// //     fetchMessages();

// //     // Listen for incoming messages
// //     socket.on("receiveMessage", (msg) => {
// //       if (msg.sender === friend.username || msg.sender === user.username) {
// //         setMessages((prev) => [...prev, msg]);
// //       }
// //     });

// //     return () => socket.off("receiveMessage");
// //   }, [user, friend]);

// //   const sendMessage = () => {
// //     if (!text.trim()) return;

// //     socket.emit("sendMessage", {
// //       sender: user.username,
// //       receiver: friend.username,
// //       text,
// //     });

// //     setMessages((prev) => [...prev, { sender: user.username, text }]);
// //     setText("");
// //   };

// //   return (
// //     <div>
// //       <h3>Chat with {friend.username}</h3>
// //       <div
// //         style={{
// //           height: "300px",
// //           overflowY: "scroll",
// //           border: "1px solid #ccc",
// //           padding: "5px",
// //           marginBottom: "10px",
// //         }}
// //       >
// //         {messages.map((msg, idx) => (
// //           <p key={idx}>
// //             <b>{msg.sender === user.username ? "You" : msg.sender}:</b> {msg.text}
// //           </p>
// //         ))}
// //       </div>
// //       <input
// //         style={{ width: "70%" }}
// //         value={text}
// //         onChange={(e) => setText(e.target.value)}
// //         placeholder="Type a message..."
// //       />
// //       <button onClick={sendMessage}>Send</button>
// //     </div>
// //   );
// // }

// import { useState, useEffect, useRef } from "react";
// import { io } from "socket.io-client";
// import axios from "axios";

// const socket = io("http://localhost:5000");

// export default function Chat({ user, friendId, friendName }) {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const messagesEndRef = useRef(null);

//   // Scroll to bottom on new message
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   useEffect(() => {
//     if (!user || !friendId) return;

//     socket.emit("join", user.userId);

//     // Fetch chat history
//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/messages/${user.userId}/${friendId}`
//         );
//         setMessages(res.data);
//       } catch (err) {
//         console.error("Fetch messages error:", err);
//       }
//     };

//     fetchMessages();

//     // Listen for incoming messages
//     socket.on("receiveMessage", (msg) => {
//       // Only push if from/to the current friend
//       if (msg.sender === friendName || msg.receiver === friendId) {
//         setMessages((prev) => [...prev, msg]);
//       }
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [user.userId, friendId, friendName]);

//   const sendMessage = () => {
//     if (text.trim() === "") return;

//     // Send message to backend
//     socket.emit("sendMessage", {
//       senderId: user.userId,
//       receiverId: friendId,
//       text,
//     });

//     // Append locally
//     setMessages((prev) => [
//       ...prev,
//       { sender: user.username, receiver: friendId, text },
//     ]);
//     setText("");
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
//       <h3>Chat with {friendName}</h3>
//       <div
//         style={{
//           flex: 1,
//           overflowY: "auto",
//           border: "1px solid #ccc",
//           padding: "10px",
//           marginBottom: "10px",
//         }}
//       >
//         {messages.map((msg, idx) => (
//           <p key={idx}>
//             <b>{msg.sender === user.username ? "You" : friendName}:</b> {msg.text}
//           </p>
//         ))}
//         <div ref={messagesEndRef}></div>
//       </div>
//       <div style={{ display: "flex" }}>
//         <input
//           style={{ flex: 1, padding: "5px" }}
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button onClick={sendMessage} style={{ marginLeft: "5px" }}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

export default function Chat({ user, friendId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!user?.userId || !friendId) return;

    // Join user's private room
    socket.emit("join", user.userId);

    // Fetch chat messages
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/messages/${user.userId}/${friendId}`);
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    fetchMessages();

    // Listen for incoming messages
    socket.on("receiveMessage", (msg) => {
      if (msg.senderId === friendId || msg.senderId === user.userId) {
        setMessages(prev => [...prev, msg]);
      }
    });

    return () => socket.off("receiveMessage");
  }, [user.userId, friendId]);

  const sendMessage = () => {
    if (text.trim() === "") return;

    socket.emit("sendMessage", {
      senderId: user.userId,
      receiverId: friendId,
      text,
    });

    // Optimistically add message locally
    setMessages(prev => [...prev, { sender: user.userId, text }]);
    setText("");
  };

//   const deleteChat = async () => {
//   try {
//     await axios.delete(`http://localhost:5000/api/messages/${user.userId}/${friendId}`);
//     setMessages([]); // Clear messages from UI
//   } catch (err) {
//     console.error("Error deleting chat:", err);
//   }
// };


const deleteChat = async () => {
  try {
    await axios.delete(`http://localhost:5000/api/messages/${user.userId}/${friendId}`);
    setMessages([]);
    alert("Chat deleted successfully!");
  } catch (err) {
    console.error("Error deleting chat:", err);
    alert("Failed to delete chat.");
  }
};



  return (
    <div style={{ border: "1px solid gray", padding: "10px", height: "400px" }}>
      <h3>Chat</h3>

      <div style={{ marginBottom: "10px" }}>
  <button onClick={deleteChat} style={{ color: "red" }}>Delete Chat</button>
</div>

      <div style={{ height: "300px", overflowY: "scroll", border: "1px solid #ccc", marginBottom: "10px" }}>
        {messages.map((msg, idx) => (
          <p key={idx}>
            <b>{msg.sender === user.userId ? "You" : "Friend"}:</b> {msg.text}
          </p>
        ))}
      </div>
      <input
        style={{ width: "80%" }}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button style={{ width: "18%" }} onClick={sendMessage}>Send</button>
    </div>
  );
}
