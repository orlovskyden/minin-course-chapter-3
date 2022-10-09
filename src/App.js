import React, { useState } from "react";
import api from "./app/api";
import SearchStatus from "./app/components/searchStatus";
import Users from "./app/components/users";

const App = () => {

  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => userId !== user._id));

  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
    console.log(id);
  }

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users onDelete={handleDelete} users={users} onToggleBookmark={handleToggleBookmark} />
    </div>
  )
}

export default App