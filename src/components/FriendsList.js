// // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // import axios from "axios";

// // // // // // // // // // // export default function FriendsList({ user, onSelectFriend }) {
// // // // // // // // // // //   const [friends, setFriends] = useState([]);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchUsers = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const res = await axios.get("http://localhost:5000/api/users");
// // // // // // // // // // //         // exclude self from list
// // // // // // // // // // //         setFriends(res.data.filter(u => u._id !== user.userId));
// // // // // // // // // // //       } catch (err) {
// // // // // // // // // // //         console.error("Error fetching users:", err);
// // // // // // // // // // //       }
// // // // // // // // // // //     };
// // // // // // // // // // //     fetchUsers();
// // // // // // // // // // //   }, [user.userId]);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ width: "200px", borderRight: "1px solid gray", padding: "10px" }}>
// // // // // // // // // // //       <h3>Friends</h3>
// // // // // // // // // // //       {friends.map(friend => (
// // // // // // // // // // //         <div
// // // // // // // // // // //           key={friend._id}
// // // // // // // // // // //           style={{ cursor: "pointer", margin: "5px 0" }}
// // // // // // // // // // //           onClick={() => onSelectFriend(friend._id)}
// // // // // // // // // // //         >
// // // // // // // // // // //           {friend.username}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       ))}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }


// // // // // // // // // // // frontend/src/components/FriendsList.js
// // // // // // // // // // import { useState } from "react";
// // // // // // // // // // import axios from "axios";
// // // // // // // // // // import Chat from "./Chat";

// // // // // // // // // // export default function FriendsList({ user }) {
// // // // // // // // // //   const [query, setQuery] = useState("");
// // // // // // // // // //   const [results, setResults] = useState([]);
// // // // // // // // // //   const [activeFriend, setActiveFriend] = useState(null);

// // // // // // // // // //   const searchFriend = async () => {
// // // // // // // // // //     if (!query.trim()) return;
// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axios.get(
// // // // // // // // // //         `http://localhost:5000/api/users/search?username=${query}`
// // // // // // // // // //       );
// // // // // // // // // //       setResults(res.data);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error("Search error:", err);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <h2>Welcome, {user.username}</h2>

// // // // // // // // // //       {/* 🔍 Search Box */}
// // // // // // // // // //       <input
// // // // // // // // // //         placeholder="Search friend by username"
// // // // // // // // // //         value={query}
// // // // // // // // // //         onChange={(e) => setQuery(e.target.value)}
// // // // // // // // // //       />
// // // // // // // // // //       <button onClick={searchFriend}>Search</button>

// // // // // // // // // //       {/* 📋 Results */}
// // // // // // // // // //       <ul>
// // // // // // // // // //         {results.map((friend) => (
// // // // // // // // // //           <li key={friend._id}>
// // // // // // // // // //             {friend.username}{" "}
// // // // // // // // // //             <button onClick={() => setActiveFriend(friend)}>
// // // // // // // // // //               Chat
// // // // // // // // // //             </button>
// // // // // // // // // //           </li>
// // // // // // // // // //         ))}
// // // // // // // // // //       </ul>

// // // // // // // // // //       {/* 💬 Active Chat */}
// // // // // // // // // //       {activeFriend && (
// // // // // // // // // //         <Chat user={user} friendId={activeFriend._id} />
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // import { useState } from "react";
// // // // // // // // // import axios from "axios";

// // // // // // // // // export default function FriendsList({ setFriend, currentUser }) {
// // // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // // //   const [results, setResults] = useState([]);

// // // // // // // // //   const searchFriend = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const res = await axios.post("http://localhost:5000/api/auth/login", {
// // // // // // // // //         username: search,
// // // // // // // // //         password: "dummy", // just to fetch
// // // // // // // // //       });
// // // // // // // // //       setResults([{ username: res.data.username, userId: res.data.userId }]);
// // // // // // // // //     } catch {
// // // // // // // // //       alert("❌ Friend not found");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h2>Friends</h2>
// // // // // // // // //       <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name" />
// // // // // // // // //       <button onClick={searchFriend}>Search</button>

// // // // // // // // //       {results.map((friend) => (
// // // // // // // // //         <div key={friend.userId}>
// // // // // // // // //           <button onClick={() => setFriend(friend)}>{friend.username}</button>
// // // // // // // // //         </div>
// // // // // // // // //       ))}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import axios from "axios";

// // // // // // // // export default function FriendsList({ user, onSelectFriend }) {
// // // // // // // //   const [friends, setFriends] = useState([]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchFriends = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await axios.get(`http://localhost:5000/api/users/search?username=`);
// // // // // // // //         // exclude current user from list
// // // // // // // //         const list = res.data.filter(f => f._id !== user.userId);
// // // // // // // //         setFriends(list);
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Error fetching friends:", err);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //     fetchFriends();
// // // // // // // //   }, [user.userId]);

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <h4>Friends</h4>
// // // // // // // //       {friends.map(friend => (
// // // // // // // //         <div key={friend._id}>
// // // // // // // //           <button onClick={() => onSelectFriend(friend._id, friend.username)}>
// // // // // // // //             {friend.username}
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       ))}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import axios from "axios";

// // // // // // // export default function FriendsList({ user, onSelectFriend }) {
// // // // // // //   const [friends, setFriends] = useState([]);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchFriends = async () => {
// // // // // // //       try {
// // // // // // //         const res = await axios.get("http://localhost:5000/api/users/search");
// // // // // // //         const otherUsers = res.data.filter((u) => u._id !== user.userId);
// // // // // // //         setFriends(otherUsers);
// // // // // // //       } catch (err) {
// // // // // // //         console.error(err);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchFriends();
// // // // // // //   }, [user]);

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h4>Friends</h4>
// // // // // // //       {friends.map((friend) => (
// // // // // // //         <div key={friend._id}>
// // // // // // //           <button onClick={() => onSelectFriend(friend._id, friend.username)}>
// // // // // // //             {friend.username}
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       ))}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // // frontend/src/components/FriendsList.js
// // // // // // import { useEffect, useState } from "react";
// // // // // // import api from "../api/axiosInstance";

// // // // // // export default function FriendsList({ user, onSelectFriend }) {
// // // // // //   const [friends, setFriends] = useState([]);
// // // // // //   const [allUsers, setAllUsers] = useState([]);

// // // // // //   // Fetch friends
// // // // // //   const fetchFriends = async () => {
// // // // // //     try {
// // // // // //       const res = await api.get(`/friends/${user.userId}`);
// // // // // //       setFriends(res.data);
// // // // // //     } catch (err) {
// // // // // //       console.error("Error fetching friends:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   // Fetch all users
// // // // // //   const fetchAllUsers = async () => {
// // // // // //     try {
// // // // // //       const res = await api.get(`/users/${user.userId}`);
// // // // // //       setAllUsers(res.data);
// // // // // //     } catch (err) {
// // // // // //       console.error("Error fetching all users:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   const addFriend = async (friendId) => {
// // // // // //     try {
// // // // // //       await api.post("/friends", { userId: user.userId, friendId });
// // // // // //       fetchFriends();
// // // // // //     } catch (err) {
// // // // // //       console.error("Error adding friend:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchFriends();
// // // // // //     fetchAllUsers();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h3>Friends</h3>
// // // // // //       {friends.length === 0 ? (
// // // // // //         <p>No friends yet</p>
// // // // // //       ) : (
// // // // // //         <ul>
// // // // // //           {friends.map((f) => (
// // // // // //             <li key={f._id} onClick={() => onSelectFriend(f._id)}>
// // // // // //               {f.username}
// // // // // //             </li>
// // // // // //           ))}
// // // // // //         </ul>
// // // // // //       )}

// // // // // //       <h3>All Users</h3>
// // // // // //       <ul>
// // // // // //         {allUsers.map((u) => (
// // // // // //           <li key={u._id}>
// // // // // //             {u.username}{" "}
// // // // // //             <button onClick={() => addFriend(u._id)}>Add Friend</button>
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import { useEffect, useState } from "react";
// // // // // import axios from "axios";

// // // // // export default function FriendsList({ user, onSelectFriend }) {
// // // // //   const [friends, setFriends] = useState([]);
// // // // //   const [allUsers, setAllUsers] = useState([]);

// // // // //   useEffect(() => {
// // // // //     if (!user?.userId) return;

// // // // //     // Fetch my friends
// // // // //     const fetchFriends = async () => {
// // // // //       try {
// // // // //         const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
// // // // //         setFriends(res.data);
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching friends:", err);
// // // // //       }
// // // // //     };

// // // // //     // Fetch all users (to add friends)
// // // // //     const fetchAllUsers = async () => {
// // // // //       try {
// // // // //         const res = await axios.get(`http://localhost:5000/api/users/${user.userId}`);
// // // // //         setAllUsers(res.data);
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching users:", err);
// // // // //       }
// // // // //     };

// // // // //     fetchFriends();
// // // // //     fetchAllUsers();
// // // // //   }, [user]);

// // // // //   // Add a friend
// // // // //   const addFriend = async (friendId) => {
// // // // //     try {
// // // // //       await axios.post("http://localhost:5000/api/friends", {
// // // // //         userId: user.userId,
// // // // //         friendId,
// // // // //       });
// // // // //       // Refresh friends list
// // // // //       const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
// // // // //       setFriends(res.data);
// // // // //     } catch (err) {
// // // // //       console.error("Error adding friend:", err);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h4>Friends</h4>
// // // // //       {friends.length === 0 && <p>No friends yet</p>}
// // // // //       <ul>
// // // // //         {friends.map((f) => (
// // // // //           <li key={f._id} onClick={() => onSelectFriend(f._id)}>
// // // // //             {f.username}
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>

// // // // //       <h4>All Users</h4>
// // // // //       <ul>
// // // // //         {allUsers
// // // // //           .filter((u) => !friends.some((f) => f._id === u._id))
// // // // //           .map((u) => (
// // // // //             <li key={u._id}>
// // // // //               {u.username}{" "}
// // // // //               <button onClick={() => addFriend(u._id)}>Add Friend</button>
// // // // //             </li>
// // // // //           ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { useEffect, useState } from "react";
// // // // import axios from "axios";

// // // // export default function FriendsList({ user, onSelectFriend }) {
// // // //   const [friends, setFriends] = useState([]);
// // // //   const [allUsers, setAllUsers] = useState([]);

// // // //   useEffect(() => {
// // // //     if (!user?.userId) return;

// // // //     const fetchFriends = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
// // // //         setFriends(res.data);
// // // //       } catch (err) {
// // // //         console.error("Error fetching friends:", err);
// // // //       }
// // // //     };

// // // //     const fetchAllUsers = async () => {
// // // //       try {
// // // //         const res = await axios.get(`http://localhost:5000/api/users/${user.userId}`);
// // // //         setAllUsers(res.data);
// // // //       } catch (err) {
// // // //         console.error("Error fetching users:", err);
// // // //       }
// // // //     };

// // // //     fetchFriends();
// // // //     fetchAllUsers();
// // // //   }, [user]);

// // // //   const addFriend = async (friendId) => {
// // // //     try {
// // // //       await axios.post("http://localhost:5000/api/friends", {
// // // //         userId: currentUserId,
// // // //   friendId: clickedUserId,
// // // //       });
// // // //       const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
// // // //       setFriends(res.data);
// // // //     } catch (err) {
// // // //       console.error("Error adding friend:", err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h4>Friends</h4>
// // // //       {friends.length === 0 && <p>No friends yet</p>}
// // // //       <ul>
// // // //         {friends.map((f) => (
// // // //           <li key={f._id} onClick={() => onSelectFriend(f)}>
// // // //             {f.username}
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       <h4>All Users</h4>
// // // //       <ul>
// // // //         {allUsers
// // // //           .filter((u) => u._id !== user.userId && !friends.some((f) => f._id === u._id))
// // // //           .map((u) => (
// // // //             <li key={u._id}>
// // // //               {u.username} <button onClick={() => addFriend(u._id)}>Add Friend</button>
// // // //             </li>
// // // //           ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useEffect, useState } from "react";
// // // import axios from "axios";

// // // export default function FriendsList({ user, onSelectFriend }) {
// // //   const [friends, setFriends] = useState([]);
// // //   const [allUsers, setAllUsers] = useState([]);

// // //   // Fetch my friends
// // //   const fetchFriends = async () => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
// // //       setFriends(res.data);
// // //     } catch (err) {
// // //       console.error("Failed to fetch friends:", err);
// // //     }
// // //   };

// // //   // Fetch all users except me
// // //   const fetchAllUsers = async () => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/api/users/${user.userId}`);
// // //       setAllUsers(res.data);
// // //     } catch (err) {
// // //       console.error("Failed to fetch all users:", err);
// // //     }
// // //   };

// // //   // Add a friend
// // //   const addFriend = async (friendId) => {
// // //     try {
// // //       await axios.post("http://localhost:5000/api/friends", {
// // //         userId: user.userId,
// // //         friendId,
// // //       });
// // //       fetchFriends(); // refresh friends list
// // //     } catch (err) {
// // //       console.error("Failed to add friend:", err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchFriends();
// // //     fetchAllUsers();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <h4>Friends</h4>
// // //       {friends.length === 0 ? (
// // //         <p>No friends yet</p>
// // //       ) : (
// // //         friends.map((f) => (
// // //           <p
// // //             key={f._id}
// // //             style={{ cursor: "pointer" }}
// // //             onClick={() => onSelectFriend(f._id)}
// // //           >
// // //             {f.username}
// // //           </p>
// // //         ))
// // //       )}

// // //       <h4>All Users</h4>
// // //       {allUsers.length === 0 ? (
// // //         <p>No users found</p>
// // //       ) : (
// // //         allUsers.map((u) => (
// // //           <div key={u._id} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
// // //             <span style={{ flex: 1 }}>{u.username}</span>
// // //             <button onClick={() => addFriend(u._id)}>Add Friend</button>
// // //           </div>
// // //         ))
// // //       )}
// // //     </div>
// // //   );
// // // }


// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // export default function FriendsList({ user, onSelectFriend }) {
// //   const [users, setUsers] = useState([]);
// //   const [friends, setFriends] = useState([]);

// //   useEffect(() => {
// //     if (!user?.userId) return; // <-- don't run until user exists

// //     const fetchAllUsers = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/api/users");
// //         setUsers(res.data.filter(u => u._id !== user.userId));
// //       } catch (err) {
// //         console.error("Fetch users error:", err);
// //       }
// //     };

// //     const fetchFriends = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
// //         setFriends(res.data);
// //       } catch (err) {
// //         console.error("Fetch friends error:", err);
// //       }
// //     };

// //     fetchAllUsers();
// //     fetchFriends();
// //   }, [user?.userId]);

// // // export default function FriendsList({ user, onSelectFriend }) {
// // //   const [users, setUsers] = useState([]);
// // //   const [friends, setFriends] = useState([]);

// // //   useEffect(() => {
// // //     if (!user?.userId) return; 

// // //     const fetchAllUsers = async () => {
// // //       try {
// // //         const res = await axios.get("http://localhost:5000/api/users");
// // //         setUsers(res.data.filter(u => u._id !== user.userId)); // exclude self
// // //       } catch (err) {
// // //         console.error("Fetch users error:", err);
// // //       }
// // //     };

// // //     const fetchFriends = async () => {
// // //       try {
// // //         const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
// // //         setFriends(res.data);
// // //       } catch (err) {
// // //         console.error("Fetch friends error:", err);
// // //       }
// // //     };

// // //     fetchAllUsers();
// // //     fetchFriends();
// // //   }, [user.userId]);

// //   const addFriend = async (friendId) => {
// //     try {
// //       await axios.post("http://localhost:5000/api/friends", {
// //         userId: user.userId,
// //         friendId
// //       });
// //       // Refresh friends list
// //       const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
// //       setFriends(res.data);
// //     } catch (err) {
// //       console.error("Add friend error:", err);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h4>Friends</h4>
// //       {friends.length === 0 ? (
// //         <p>No friends yet</p>
// //       ) : (
// //         friends.map(f => (
// //           <div key={f._id} onClick={() => onSelectFriend(f._id, f.username)}>
// //             {f.username}
// //           </div>
// //         ))
// //       )}

// //       <h4>All Users</h4>
// //       {users.length === 0 ? (
// //         <p>No users found</p>
// //       ) : (
// //         users.map(u => (
// //           <div key={u._id}>
// //             {u.username}{" "}
// //             <button onClick={() => addFriend(u._id)}>Add Friend</button>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }




// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function FriendsList({ user, onSelectFriend }) {
//   const [friends, setFriends] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);

//   // Fetch my friends and all users
//   useEffect(() => {
//     if (!user?.userId) return;

//     const fetchFriends = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
//         setFriends(res.data);
//       } catch (err) {
//         console.error("Error fetching friends:", err);
//       }
//     };

//     const fetchAllUsers = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/users`);
//         setAllUsers(res.data.filter(u => u._id !== user.userId));
//       } catch (err) {
//         console.error("Error fetching users:", err);
//       }
//     };

//     fetchFriends();
//     fetchAllUsers();
//   }, [user]);

//   const addFriend = async (friendId) => {
//     try {
//       await axios.post("http://localhost:5000/api/friends", {
//         userId: user.userId,
//         friendId,
//       });
//       // Refresh friends list
//       const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
//       setFriends(res.data);
//     } catch (err) {
//       console.error("Error adding friend:", err);
//     }
//   };  const removeFriend = async (friendId) => {
//   try {
//     await axios.delete(`http://localhost:5000/api/friends/${user.userId}/${friendId}`);
//     const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
//     setFriends(res.data);
//   } catch (err) {
//     console.error("Error removing friend:", err);
//   }
// };


//   return (
//     <div>
//       <h4>Friends</h4>
//       {friends.length === 0 ? (
//         <p>No friends yet</p>
//       ) : (
//         friends.map(f => (
//           <div key={f._id}>
//             <button onClick={() => onSelectFriend(f._id)}>{f.username}</button>
//           </div>
//         ))
//       )}

//       <h4>All Users</h4>
//       {allUsers.length === 0 ? (
//         <p>No users found</p>
//       ) : (
//         allUsers.map(u => (
//           <div key={u._id}>
//             {u.username}{" "}
//             {!friends.find(f => f._id === u._id) && (
//               <button onClick={() => addFriend(u._id)}>Add Friend</button>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";

export default function FriendsList({ user, onSelectFriend }) {
  const [friends, setFriends] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  // Fetch friends and all users
  useEffect(() => {
    if (!user?.userId) return;

    const fetchFriends = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
        setFriends(res.data);
      } catch (err) {
        console.error("Error fetching friends:", err);
      }
    };

    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        // Exclude self
        setAllUsers(res.data.filter(u => u._id !== user.userId));
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchFriends();
    fetchAllUsers();
  }, [user]);

  // Add friend
  const addFriend = async (friendId) => {
    try {
      await axios.post("http://localhost:5000/api/friends", {
        userId: user.userId,
        friendId,
      });
      // Refresh friends list
      const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
      setFriends(res.data);
    } catch (err) {
      console.error("Error adding friend:", err);
    }
  };

  // Remove friend
  const removeFriend = async (friendId) => {
    try {
      await axios.delete(`http://localhost:5000/api/friends/${user.userId}/${friendId}`);
      // Refresh friends list
      const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
      setFriends(res.data);
    } catch (err) {
      console.error("Error removing friend:", err);
    }
  };

  return (
    <div>
      <h4>Friends</h4>
      {friends.length === 0 ? (
        <p>No friends yet</p>
      ) : (
        friends.map(f => (
          <div key={f._id} style={{ marginBottom: "5px" }}>
            <button onClick={() => onSelectFriend(f._id)}>{f.username}</button>
            <button 
              onClick={() => removeFriend(f._id)} 
              style={{ marginLeft: "5px", color: "red" }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h4>All Users</h4>
      {allUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        allUsers.map(u => (
          <div key={u._id} style={{ marginBottom: "5px" }}>
            {u.username}{" "}
            {!friends.find(f => f._id === u._id) && (
              <button onClick={() => addFriend(u._id)}>Add Friend</button>
            )}
          </div>
        ))
      )}
    </div>
  );
}
