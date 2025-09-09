
import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import FriendsList from "./FriendsList";
import Chat from "./Chat";

export default function ChatApp({ user }) {
  const [friendId, setFriendId] = useState(null);
  const [friendName, setFriendName] = useState("");

  return (
    <Box sx={{ display: "flex", gap: 2, height: "600px" }}>
      {/* Left panel */}
      <Paper sx={{ width: 300, p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Friends</Typography>
        <FriendsList
          user={user}
          onSelectFriend={(id, name) => {
            setFriendId(id);
            setFriendName(name);
          }}
        />
      </Paper>

      {/* Right panel */}
      <Box sx={{ flex: 1 }}>
        {friendId ? (
          <Chat user={user} friendId={friendId} friendName={friendName} />
        ) : (
          <Paper sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h6">Select a friend to start chatting</Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
}
