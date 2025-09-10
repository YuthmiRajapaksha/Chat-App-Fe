
import { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button, Typography, Divider, Box } from "@mui/material";

export default function FriendsList({ user, onSelectFriend,selectedFriendId }) {
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
        setAllUsers(res.data.filter(u => u._id !== user.userId));
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchFriends();
    fetchAllUsers();
  }, [user]);

  const addFriend = async (friendId) => {
    try {
      await axios.post("http://localhost:5000/api/friends", {
        userId: user.userId,
        friendId,
      });
      const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
      setFriends(res.data);
    } catch (err) {
      console.error("Error adding friend:", err);
    }
  };

  const removeFriend = async (friendId) => {
    try {
      await axios.delete(`http://localhost:5000/api/friends/${user.userId}/${friendId}`);
      const res = await axios.get(`http://localhost:5000/api/friends/${user.userId}`);
      setFriends(res.data);
    } catch (err) {
      console.error("Error removing friend:", err);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* <Typography variant="h6" gutterBottom>Friends</Typography> */}
      
      {/* <List dense>
        {friends.length === 0 ? (
          <Typography variant="body2">No friends yet</Typography>
        ) : (
          friends.map(f => (
            <ListItem key={f._id} button onClick={() => onSelectFriend(f._id)}>
              <ListItemText primary={f.username} />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="error" size="small" onClick={() => removeFriend(f._id)}>
                  Remove
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        )}
      </List> */}


       <List dense>
        {friends.length === 0 ? (
          <Typography variant="body2">No friends yet</Typography>
        ) : (
          friends.map(f => (
            <ListItem
              key={f._id}
              button
              onClick={() => onSelectFriend(f._id, f.username)}
              sx={{
                bgcolor: selectedFriendId === f._id ? "#c8c7c7ff" : "transparent", // ✅ highlight background
                borderRadius: 1,
                "&:hover": { bgcolor: "#c8c7c7ff" }
              }}
            >
              <ListItemText
                primary={f.username}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: "Poppins",
                    fontWeight: selectedFriendId === f._id ? "bold" : "normal",
                    fontSize: selectedFriendId === f._id ? 20 : 16 // ✅ bigger when selected
                  }
                }}
              />
              <ListItemSecondaryAction>
                <Button
  variant="outlined"
  color="error"
  size="small"
  sx={{ minWidth: 60, py: 0.4, px: 1, fontSize: 12 }}
  onClick={() => removeFriend(f._id)}
>
  Remove
</Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        )}
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>All Users</Typography>
      <List dense>
        {allUsers.length === 0 ? (
          <Typography variant="body2">No users found</Typography>
        ) : (
          allUsers.map(u => (
            <ListItem key={u._id}>
              <ListItemText primary={u.username} primaryTypographyProps={{
            sx: { fontFamily: "Poppins" , fontSize: 20} // ✅ target Typography inside
          }}/>
              {!friends.find(f => f._id === u._id) && (
                <ListItemSecondaryAction>
                 <Button
  variant="contained"
  color="primary"
  size="small"
  sx={{ minWidth: 60, py: 0.4, px: 1, fontSize: 12 }}
  onClick={() => addFriend(u._id)}
>
  Add Friend
</Button>
                </ListItemSecondaryAction>
              )}
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );
}
