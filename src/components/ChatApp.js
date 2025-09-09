// // // // import { useState } from "react";
// // // // import FriendsList from "./FriendsList";
// // // // import Chat from "./Chat";

// // // // export default function ChatApp({ user }) {
// // // //   const [friendId, setFriendId] = useState(null);

// // // //   return (
// // // //     <div style={{ display: "flex" }}>
// // // //       <FriendsList user={user} onSelectFriend={setFriendId} />
// // // //       <div style={{ flex: 1, padding: "10px" }}>
// // // //         {friendId ? (
// // // //           <Chat user={user} friendId={friendId} />
// // // //         ) : (
// // // //           <h3>Select a friend to start chatting</h3>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useState } from "react";
// // // import FriendsList from "./FriendsList";
// // // import Chat from "./Chat";
// // // import SearchBar from "./SearchBar";

// // // export default function ChatApp({ user }) {
// // //   const [friendId, setFriendId] = useState(null);

// // //   return (
// // //     <div style={{ display: "flex" }}>
// // //       <div style={{ width: "250px", borderRight: "1px solid gray", padding: "10px" }}>
// // //         <SearchBar onSelectFriend={setFriendId} />
// // //         <FriendsList user={user} onSelectFriend={setFriendId} />
// // //       </div>
// // //       <div style={{ flex: 1, padding: "10px" }}>
// // //         {friendId ? (
// // //           <Chat user={user} friendId={friendId} />
// // //         ) : (
// // //           <h3>Select or search a friend to start chatting</h3>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useState } from "react";
// // import FriendsList from "./FriendsList";
// // import Chat from "./Chat";
// // import SearchBar from "./SearchBar";

// // export default function ChatApp({ user }) {
// //   const [friendId, setFriendId] = useState(null);
// //   const [friendName, setFriendName] = useState(""); // keep username for display

// //   const handleSelectFriend = (id, username) => {
// //     setFriendId(id);
// //     setFriendName(username);
// //   };

// //   return (
// //     <div style={{ display: "flex", height: "100vh" }}>
// //       <div style={{ width: "250px", borderRight: "1px solid gray", padding: "10px" }}>
// //         <SearchBar onSelectFriend={handleSelectFriend} />
// //         <FriendsList user={user} onSelectFriend={handleSelectFriend} />
// //       </div>
// //       <div style={{ flex: 1, padding: "10px" }}>
// //         {friendId ? (
// //           <Chat user={user} friendId={friendId} friendName={friendName} />
// //         ) : (
// //           <h3>Select or search a friend to start chatting</h3>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// // import { useState } from "react";
// // import FriendsList from "./FriendsList";
// // import Chat from "./Chat";
// // import SearchBar from "./SearchBar";

// // export default function ChatApp({ user }) {
// //   const [friendId, setFriendId] = useState(null);
// //   const [friendName, setFriendName] = useState("");

// //   const handleSelectFriend = (id, username) => {
// //     setFriendId(id);
// //     setFriendName(username);
// //   };

// //   return (
// //     <div style={{ display: "flex", height: "100vh" }}>
// //       <div style={{ width: "250px", borderRight: "1px solid gray", padding: "10px" }}>
// //         <SearchBar onSelectFriend={handleSelectFriend} />
// //         <FriendsList user={user} onSelectFriend={handleSelectFriend} />
// //       </div>
// //       <div style={{ flex: 1, padding: "10px" }}>
// //         {friendId ? (
// //           <Chat user={user} friendId={friendId} friendName={friendName} />
// //         ) : (
// //           <h3>Select or search a friend to start chatting</h3>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import FriendsList from "./FriendsList";
// import Chat from "./Chat";

// export default function ChatApp({ user }) {
//   const [selectedFriendId, setSelectedFriendId] = useState(null);
//   const [selectedFriendName, setSelectedFriendName] = useState("");

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <div style={{ width: "250px", borderRight: "1px solid gray", padding: "10px" }}>
//         {/* <FriendsList
//           user={user}
//           onSelectFriend={(id, name) => {
//             setSelectedFriendId(id);
//             setSelectedFriendName(name);
//           }}
//         /> */}
//         <FriendsList user={user} onSelectFriend={setFriendId} />

//       </div>

//       <div style={{ flex: 1, padding: "10px" }}>
//         {selectedFriendId ? (
//           <Chat
//             user={user}
//             friendId={selectedFriendId}
//             friendName={selectedFriendName}
//           />
//         ) : (
//           <h3>Select a friend to start chatting</h3>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import FriendsList from "./FriendsList";
import Chat from "./Chat";

export default function ChatApp({ user }) {
  const [friendId, setFriendId] = useState(null);

  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      {/* Left panel: Friends list */}
      <div style={{ width: "250px", borderRight: "1px solid gray", padding: "10px" }}>
        <h3>Welcome {user.username}</h3>
        <FriendsList user={user} onSelectFriend={setFriendId} />
      </div>

      {/* Right panel: Chat */}
      <div style={{ flex: 1, padding: "10px" }}>
        {friendId ? (
          <Chat user={user} friendId={friendId} />
        ) : (
          <h3>Select a friend to start chatting</h3>
        )}
      </div>
    </div>
  );
}
