import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";


function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Sarah Chen", email: "sarah.chen@example.com" },
    { id: 2, name: "Michael Rodriguez", email: "m.rodriguez@example.com" },
    { id: 3, name: "Emily Watson", email: "emily.w@example.com" }
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <p className="subtitle">
        Manage your team members and their information
      </p>

      <div className="card">
        <h3>Add New User</h3>
        <UserForm addUser={addUser} />
      </div>

      <h3>Team Members</h3>

      <UserList
        users={users}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </div>
  );
}

export default App;
