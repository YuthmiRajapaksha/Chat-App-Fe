// // import { useState } from "react";
// // import axios from "axios";

// // export default function Login({ setUser }) {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");

// //   const login = async () => {
// //     try {
// //       const res = await axios.post("http://localhost:5000/api/auth/login", { username, password });
// //       setUser({ username: res.data.username, userId: res.data.userId, token: res.data.token });
// //     } catch (err) {
// //       alert(err.response.data.error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
// //       <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
// //       <button onClick={login}>Login</button>
// //     </div>
// //   );
// // }



// //workinggggggggggggggggggggggg
// // import { useState } from "react";
// // import axios from "axios";

// // export default function Login({ setUser }) {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");

// //   const login = async () => {
// //     try {
// //       const res = await axios.post("http://localhost:5000/api/auth/login", { username, password });
// //       setUser(res.data);
// //     } catch (err) {
// //       alert("❌ Login failed");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
// //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
// //       <button onClick={login}>Login</button>
// //     </div>
// //   );
// // }


// import { useState } from "react";

// export default function Login({ onLogin }) {
//   const [username, setUsername] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Fake users just for demo
//     const users = {
//       nanda: { userId: "68bed85cdd8e12e03817b323", username: "nanda" },
//       alice: { userId: "68bed85cdd8e12e03817b324", username: "alice" },
//       bob:   { userId: "68bed85cdd8e12e03817b325", username: "bob" }
//     };

//     if (users[username]) {
//       onLogin(users[username]); // Pass user object to App
//     } else {
//       alert("❌ User not found");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Enter username (e.g. alice)"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }


import { useState } from "react";
import api from "../api/axiosInstance";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { username, password });
      onLogin(res.data);
    } catch (err) {
      alert("❌ Invalid username or password");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
