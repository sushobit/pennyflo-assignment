// App.js
import React, { useState } from 'react';
import './index.css';
import UserList from './userlist';
import ChatSection from './chatsection';

function HomePage() {
    // Dummy user data for demonstration
    const [users, setUsers] = useState([
      { id: 1, name: 'Karan Mehta', messages: ['Hello', 'How are you?'] },
      { id: 2, name: 'Aman Gupta', messages: ['Hi', 'I am fine, thank you!'] },
      { id: 3, name: 'Anjali Mehra', messages: ['Hey there', 'What are you up to?'] },
      { id: 4, name: 'Priya Sing', messages: ['Hello', 'Whats going on?'] },
    ]);
  
    // State to keep track of selected user's messages
    const [selectedUserMessages, setSelectedUserMessages] = useState([]);
    
    // State to keep track of typed message
    const [typedMessage, setTypedMessage] = useState('');
  
    // Function to handle user selection
    const handleUserSelect = (userId) => {
      const selectedUser = users.find(user => user.id === userId);
      setSelectedUserMessages(selectedUser.messages);
      // Clear typed message when user changes
      setTypedMessage('');
    };
  
    return (
      <div className="HomepageContainer">
        <UserList users={users} onUserSelect={handleUserSelect} />
        <ChatSection
          messages={selectedUserMessages}
          typedMessage={typedMessage}
          setTypedMessage={setTypedMessage}
        />
      </div>
    );
  }
  

export default HomePage;
