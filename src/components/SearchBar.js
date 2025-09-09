

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
