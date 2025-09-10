
// import { useEffect, useState, useRef } from "react";
// import { io } from "socket.io-client";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   TextField,
//   IconButton,
//   Button,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
//   Divider
// } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
// import DeleteIcon from "@mui/icons-material/Delete";

// const socket = io("http://localhost:5000");

// export default function Chat({ user, friendId, friendName }) {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const messagesEndRef = useRef(null);
//   const [bgColor, setBgColor] = useState("#f5f5f5"); // default background

//   // Scroll to bottom
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     if (!user?.userId || !friendId) return;

//     socket.emit("join", user.userId);

//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/messages/${user.userId}/${friendId}`
//         );
//         setMessages(res.data);
//       } catch (err) {
//         console.error("Error fetching messages:", err);
//       }
//     };
//     fetchMessages();

//     socket.on("receiveMessage", (msg) => {
//       if (msg.sender === friendId || msg.sender === user.userId) {
//         setMessages((prev) => [...prev, msg]);
//       }
//     });

//     return () => socket.off("receiveMessage");
//   }, [user.userId, friendId]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = () => {
//     if (!text.trim()) return;

//     socket.emit("sendMessage", {
//       senderId: user.userId,
//       receiverId: friendId,
//       text,
//     });

//     setMessages((prev) => [...prev, { sender: user.userId, text }]);
//     setText("");
//   };

//   const deleteChat = async () => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/messages/${user.userId}/${friendId}`
//       );
//       setMessages([]);
//     } catch (err) {
//       console.error("Error deleting chat:", err);
//     }
//   };

//   return (
//     <Paper elevation={3} sx={{ p: 2, height: "500px", display: "flex", flexDirection: "column" }}>
//       <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//         <Typography variant="h6">Chat with {friendName || "Friend"}</Typography>
//         <Button
//           variant="outlined"
//           color="error"
//           startIcon={<DeleteIcon />}
//           onClick={deleteChat}
//         >
//           Delete Chat
//         </Button>
//       </Box>

//       <List
//         sx={{
//           flex: 1,
//           overflowY: "auto",
//           mb: 2,
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           p: 1,
//         }}
//       >
//         {messages.map((msg, idx) => (
//           <ListItem
//             key={idx}
//             sx={{
//               justifyContent: msg.sender === user.userId ? "flex-end" : "flex-start",
//             }}
//           >
//             <Box
//               sx={{
//                 bgcolor: msg.sender._id === user.userId ? "#1976d2" : "#e0e0e0",
// color: msg.sender._id === user.userId ? "#fff" : "#000",
// justifyContent: msg.sender._id === user.userId ? "flex-end" : "flex-start",

//                 borderRadius: 2,
//                 px: 2,
//                 py: 1,
//                 maxWidth: "70%",
//                 wordWrap: "break-word",
//               }}
//             >
//               <Typography variant="body1">{msg.text}</Typography>
//             </Box>
//           </ListItem>
//         ))}
//         <div ref={messagesEndRef} />
//       </List>

//       <Box sx={{ display: "flex", gap: 1 }}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           size="small"
//           placeholder="Type a message..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <IconButton color="primary" onClick={sendMessage}>
//           <SendIcon />
//         </IconButton>
//       </Box>
//     </Paper>
//   );
// }


import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  List,
  ListItem,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const socket = io("http://localhost:5000");

export default function Chat({ user, friendId, friendName }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [sentColor, setSentColor] = useState("#1976d2"); // default sent bubble
  const [receivedColor, setReceivedColor] = useState("#e0e0e0"); // default received bubble
  const messagesEndRef = useRef(null);
  const [image, setImage] = useState(null);

  

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!user?.userId || !friendId) return;

    socket.emit("join", user.userId);

    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/messages/${user.userId}/${friendId}`
        );
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    fetchMessages();

    socket.on("receiveMessage", (msg) => {
      if (msg.sender === friendId || msg.sender === user.userId) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => socket.off("receiveMessage");
  }, [user.userId, friendId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("sendMessage", {
      senderId: user.userId,
      receiverId: friendId,
      text,
    });

    setMessages((prev) => [...prev, { sender: user.userId, text }]);
    setText("");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        height: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" sx={{fontWeight:"bold"}}>Chat with {friendName || "Friend"}</Typography>

        {/* Bubble Color Pickers */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography variant="body2" sx={{ alignSelf: "center" }}>
            Sent:
          </Typography>
          <input
            type="color"
            value={sentColor}
            onChange={(e) => setSentColor(e.target.value)}
            style={{ cursor: "pointer" }}
          />
          <Typography variant="body2" sx={{ alignSelf: "center" }}>
            Received:
          </Typography>
          <input
            type="color"
            value={receivedColor}
            onChange={(e) => setReceivedColor(e.target.value)}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Box>

      <List
        sx={{
          flex: 1,
          overflowY: "auto",
          mb: 2,
          border: "1px solid #ddd",
          borderRadius: "8px",
          p: 1,
        }}
      >
        {messages.map((msg, idx) => (
          <ListItem
            key={idx}
            sx={{
              justifyContent: msg.sender === user.userId ? "flex-end" : "flex-start",
            }}
          >
            <Box
              sx={{
                bgcolor: msg.sender === user.userId ? sentColor : receivedColor,
                color: msg.sender === user.userId ? "#fff" : "#000",
                borderRadius: 2,
                px: 2,
                py: 1,
                maxWidth: "70%",
                wordWrap: "break-word",
              }}
            >
              <Typography variant="body1">{msg.text}</Typography>
            </Box>
          </ListItem>
        ))}
        <div ref={messagesEndRef} />
      </List>

      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <IconButton color="primary" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
