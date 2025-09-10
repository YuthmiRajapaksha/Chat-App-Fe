
import { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import Login from "./components/Login";
import ChatApp from "./components/ChatApp";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/img/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 , color:"white"}}>
            <Typography variant="h4">Welcome, {user.username}</Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setUser(null)}
            >
              Logout
            </Button>
          </Box>

          <Paper elevation={3} sx={{ p: 2 }}>
            <ChatApp user={user} />
          </Paper>
        </Box>
      )}
    </Box>
  );
}
