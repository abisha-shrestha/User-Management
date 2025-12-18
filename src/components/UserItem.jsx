import { useState } from "react";

function UserItem({ user, deleteUser, updateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const saveEdit = () => {
    updateUser({
      id: user.id,
      name: name,
      email: email
    });
    setIsEditing(false);
  };

  return (
    <div className="user-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <div className="user-info">
            <p><strong>{user.name}</strong></p>
            <p>{user.email}</p>
          </div>

          <div className="actions">
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UserItem;
