import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddUserForm from './Components/AddUserForm';
import UserList from './Components/UserList';
import EditUserForm from './Components/EditUserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUserId(null);
  };

  const deleteUser = (userToDelete) => {
    const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
    setUsers(updatedUsers);
  };

  return (
    <>
    <div className='container'>
    <h3>User Management<small class="text-body-secondary"> Application</small></h3>
      <AddUserForm addUser={addUser} />
      <UserList
        users={users}
        editUser={setEditingUserId}
        deleteUser={deleteUser}
      />
      {editingUserId !== null && (
        <EditUserForm
          user={users.find((user) => user.id === editingUserId)}
          editUser={editUser}
          onCancel={() => setEditingUserId(null)}
        />
      )}
    </div>
    </>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
