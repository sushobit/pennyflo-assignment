import React from 'react';
import './userlist.css';

function UserList({ users, onUserSelect }) {
  return (
    <div className="user-list">
      <h2 className='user-list-head'>All Users</h2>
      <ul>
        {users.map(user => (
          <li className='User-list-items' key={user.id} onClick={() => onUserSelect(user.id)}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
