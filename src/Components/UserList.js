// UserList.js

import React from 'react';

function UserList({ users, editUser, deleteUser }) {
  const handleEdit = (userId) => {
    editUser(userId);
  };

  const handleDelete = (userId) => {
    const userToDelete = users.find((user) => user.id === userId);
   
      deleteUser(userToDelete);
    
  };

  return (
    <div className=''>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}<br />
              <strong>Email:</strong> {user.email}<br />
              <strong>Phone:</strong> {user.phone}<br />
              <div className='container mb-3'>
              <button type="submit" class="btn btn-primary mx-2 my-2" onClick={() => handleEdit(user.id)}>Edit</button>
              <button type="submit" class="btn btn-primary" onClick={() => handleDelete()}>Delete</button>
              </div></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
