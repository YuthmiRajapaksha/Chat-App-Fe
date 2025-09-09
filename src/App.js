// import { useState } from "react";
// import Login from "./components/Login";
// import Chat from "./components/Chat";
// import ChatApp from "./components/ChatApp";

// function App() {
//   const [user, setUser] = useState(null);
//   const [friendId, setFriendId] = useState(""); // enter friend's userId

//   if (!user) return <Login setUser={setUser} />;

//   return (
//     <div>
//       <h1>Welcome, {user.username}</h1>
//       <input placeholder="Friend ID" value={friendId} onChange={e=>setFriendId(e.target.value)} />
//       <Chat user={user} friendId={friendId} />
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import Login from "./components/Login";
// import FriendsList from "./components/FriendsList";
// import Chat from "./components/Chat";

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [friend, setFriend] = useState(null);

//   if (!user) return <Login setUser={setUser} />;

//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       <FriendsList setFriend={setFriend} currentUser={user} />
//       {friend ? (
//         <Chat user={user} friend={friend} />
//       ) : (
//         <p>👆 Select a friend to start chatting</p>
//       )}
//     </div>
//   );
// }

// import ChatApp from "./components/ChatApp";

// // Example user object after login
// const user = {
//   userId: "68bed85cdd8e12e03817b323",
//   username: "nanda"
// };

// function App() {
//   return <ChatApp user={user} />;
// }

// export default App;


// import { useState, useEffect } from "react";
// import Login from "./components/Login";
// import Chat from "./components/Chat";
// import FriendsList from "./components/FriendsList";
// import api from "./api/axiosInstance";

// function App() {
//   const [user, setUser] = useState(null);
//   const [friends, setFriends] = useState([]);
//   const [friendId, setFriendId] = useState(null);

//   useEffect(() => {
//     const fetchFriends = async () => {
//       const res = await api.get("/auth/register"); // TEMP: replace with real "get users" route
//       setFriends(res.data);
//     };
//     fetchFriends();
//   }, []);

//   if (!user) return <Login onLogin={setUser} />;

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ width: "250px", borderRight: "1px solid gray", padding: "10px" }}>
//         <h2>Welcome {user.username}</h2>
//         <FriendsList friends={friends.filter((f) => f._id !== user.userId)} onSelectFriend={setFriendId} />
//       </div>
//       <div style={{ flex: 1, padding: "10px" }}>
//         {friendId ? <Chat user={user} friendId={friendId} /> : <h3>Select a friend to chat</h3>}
//       </div>
//     </div>
//   );
// }

// export default App;



// import { useState, useEffect } from "react";
// import Login from "./components/Login";
// import Chat from "./components/Chat";
// import FriendsList from "./components/FriendsList";
// import api from "./api/axiosInstance";

// function App() {
//   const [user, setUser] = useState(null);
//   const [friends, setFriends] = useState([]);
//   const [friendId, setFriendId] = useState(null);

//   useEffect(() => {
//     const fetchFriends = async () => {
//       try {
//         const res = await api.get("/users"); // 👈 fetch all users
//         setFriends(res.data);
//       } catch (err) {
//         console.error("Fetch friends error:", err);
//       }
//     };
//     fetchFriends();
//   }, []);

//   if (!user) return <Login onLogin={setUser} />;

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ width: "250px", borderRight: "1px solid gray", padding: "10px" }}>
//         <h2>Welcome {user.username}</h2>
//         <FriendsList
//           friends={friends.filter((f) => f._id !== user.userId)} // hide self
//           onSelectFriend={setFriendId}
//         />
//       </div>
//       <div style={{ flex: 1, padding: "10px" }}>
//         {friendId ? (
//           <Chat user={user} friendId={friendId} />
//         ) : (
//           <h3>Select a friend to chat</h3>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import ChatApp from "./components/ChatApp";

function App() {
  // Simulate a logged-in user. In real app, this comes from login
  const [user, setUser] = useState(null);

  // Example users to switch between for testing
  const users = [
    { userId: "68bdc85fa197adafdbd726b9", username: "alice" },
    { userId: "68bdca36a197adafdbd726be", username: "yuthmi" },
    { userId: "68bed85cdd8e12e03817b323", username: "nanda" },
  ];

  return (
    <div>
      <h2>Select a user to login:</h2>
      {users.map((u) => (
        <button key={u.userId} onClick={() => setUser(u)} style={{ margin: "5px" }}>
          Login as {u.username}
        </button>
      ))}

      {user && <ChatApp user={user} />}
    </div>
  );
}

export default App;
