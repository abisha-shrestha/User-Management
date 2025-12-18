import UserItem from "./UserItem";

function UserList({ users, deleteUser, updateUser }) {
  return (
    <div>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          updateUser={updateUser}
        />
      ))}
    </div>
  );
}

export default UserList;
