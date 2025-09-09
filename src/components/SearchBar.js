// // // import { useState } from "react";
// // // import axios from "axios";

// // // export default function SearchBar({ onSelectFriend }) {
// // //   const [query, setQuery] = useState("");
// // //   const [result, setResult] = useState(null);

// // //   const handleSearch = async () => {
// // //     if (!query) return;
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/api/users/search/${query}`);
// // //       setResult(res.data);
// // //     } catch (err) {
// // //       setResult(null);
// // //       alert("User not found");
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ marginBottom: "10px" }}>
// // //       <input
// // //         type="text"
// // //         placeholder="Search friend by name"
// // //         value={query}
// // //         onChange={(e) => setQuery(e.target.value)}
// // //       />
// // //       <button onClick={handleSearch}>Search</button>

// // //       {result && (
// // //         <div
// // //           style={{ marginTop: "10px", cursor: "pointer" }}
// // //           onClick={() => onSelectFriend(result._id)}
// // //         >
// // //           ✅ Found: {result.username}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }



// // // import { useState } from "react";
// // // import axios from "axios";

// // // export default function SearchBar({ onSelectFriend }) {
// // //   const [search, setSearch] = useState("");
// // //   const [results, setResults] = useState([]);

// // //   const handleSearch = async () => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/api/users/search?username=${search}`);
// // //       setResults(res.data);
// // //     } catch (err) {
// // //       alert("❌ Error searching friend");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <input
// // //         value={search}
// // //         onChange={(e) => setSearch(e.target.value)}
// // //         placeholder="Search by name"
// // //       />
// // //       <button onClick={handleSearch}>Search</button>

// // //       {results.map((friend) => (
// // //         <div key={friend._id}>
// // //           <button onClick={() => onSelectFriend(friend._id)}>
// // //             {friend.username}
// // //           </button>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }



// // import { useState } from "react";
// // import axios from "axios";

// // export default function SearchBar({ onSelectFriend }) {
// //   const [search, setSearch] = useState("");
// //   const [results, setResults] = useState([]);

// //   const handleSearch = async () => {
// //     try {
// //       const res = await axios.get(`http://localhost:5000/api/users/search?username=${search}`);
// //       if (res.data.length === 0) {
// //         setResults([]);
// //         alert("❌ Friend not found");
// //       } else {
// //         setResults(res.data);
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       alert("❌ Error searching friend");
// //     }
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //         placeholder="Search friend by name"
// //       />
// //       <button onClick={handleSearch}>Search</button>

// //       {results.map((friend) => (
// //         <div key={friend._id}>
// //           <button onClick={() => onSelectFriend(friend._id)}>
// //             {friend.username}
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import axios from "axios";

// export default function SearchBar({ onSelectFriend }) {
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     if (!search.trim()) return;
//     try {
//       const res = await axios.get(`http://localhost:5000/api/users/search?username=${search}`);
//       if (res.data.length === 0) {
//         setResults([]);
//         alert("❌ Friend not found");
//       } else {
//         setResults(res.data);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Error searching friend");
//     }
//   };

//   return (
//     <div style={{ marginBottom: "10px" }}>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search friend"
//       />
//       <button onClick={handleSearch}>Search</button>

//       {results.map((friend) => (
//         <div key={friend._id}>
//           <button onClick={() => onSelectFriend(friend._id, friend.username)}>
//             {friend.username}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }


import { useState } from "react";
import axios from "axios";

export default function SearchBar({ onSelectFriend }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/search?username=${search}`);
      if (res.data.length === 0) {
        setResults([]);
        alert("❌ Friend not found");
      } else {
        setResults(res.data);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error searching friend");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search friend by name"
      />
      <button onClick={handleSearch}>Search</button>

      {results.map((friend) => (
        <div key={friend._id}>
          <button onClick={() => onSelectFriend(friend._id, friend.username)}>
            {friend.username}
          </button>
        </div>
      ))}
    </div>
  );
}
