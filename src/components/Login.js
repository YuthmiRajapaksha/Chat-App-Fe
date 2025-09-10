
import { useState } from "react";
import { TextField, Button, Typography, Box, Paper, Link } from "@mui/material"; // ✅ import Link
import api from "../api/axiosInstance";
import RegisterForm from "./RegisterForm"; // import your register form

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false); // ✅ define state

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { username, password });
      onLogin(res.data);
    } catch (err) {
      alert("❌ Invalid username or password");
    }
  };

  if (showRegister) {
    return (
      <RegisterForm
        onRegister={(data) => {
          alert("✅ Registered! You can now login.");
          setShowRegister(false); // ✅ toggle back to login
        }}
      />
    );
  }

  return (
    <Paper
      elevation={6}
      sx={{ width: 400, p: 5, borderRadius: 3, bgcolor: "white" }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{fontFamily:"poppins", fontWeight:"bold"}}>
        Login
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" size="large"  onClick={handleLogin}>
          Login
        </Button>
      </Box>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Don't have an account?{" "}
        <Link
          href="#"
          onClick={() => setShowRegister(true)} // ✅ defined now
          underline="hover"
          sx={{ cursor: "pointer" }}
        >
          Sign Up
        </Link>
      </Typography>
    </Paper>
  );
}
