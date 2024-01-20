import React, { useCallback } from 'react'
import { useState } from 'react';
import styled from "styled-components";

const Lobby = () => {
  const [email, setEmail] = useState('');
  const [room, setroom] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleidChange = (e) => {
    setroom(e.target.value);
  };

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log({
      email,
      room,
    });
  }, [email, room]);
  
  return (
  <Wrapper>
    <div className="App">
      <div className="login-container">
        <h2>Lobby</h2>
        <form >
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Room:</label>
            <input
              type="text"
              value={room}
              onChange={handleidChange}
              placeholder="Enter room id "
            />
          </div>
          <button type="button" onClick={handleSubmitForm} >
            Login
          </button>
        </form>
      </div>
    </div>
    </Wrapper>
  )
};

const Wrapper  = styled.div`
.App {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.login-container {
  width: 80%;
  max-width: 400px;
  
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Responsive Styles */
@media screen and (max-width: 600px) {
  .login-container {
    width: 90%;
  }
}


`;



export default Lobby
