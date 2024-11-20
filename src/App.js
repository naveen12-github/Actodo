import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';

function App() {
  const [user, setusers] = useState([
    {
      username: "Naveen",
      password: "1234",
    },
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login user={user} setusers={setusers} />} />
          <Route path="/signup" element={<Signup user={user} setusers={setusers} />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
