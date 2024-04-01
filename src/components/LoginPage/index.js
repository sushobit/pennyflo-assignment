// App.js
import React, { useState } from 'react';
import { firestore } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './index.css';

const LoginPage = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const data = {
        username: username,
        password: password,
      };

      const docRef = await addDoc(collection(firestore, 'users'), data);
      console.log('Document written with ID: ', docRef.id);
      console.log('username:', data.username);
      console.log('Password:', data.password);
    } catch (error) {
      console.error('Error adding document: ', error);
      setError('Error logging in');
    }
  };

  return (
    <div className="login-container">
      <div className='login-section'>
      <h1>Chat Hub</h1>
      <div className="login-form">
            <form className='form-section' onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    Required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    Required
                />
                    <Link to="/home"><button className="login-button">Login</button></Link>
            </form>
            {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
