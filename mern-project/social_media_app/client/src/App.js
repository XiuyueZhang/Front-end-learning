import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import Homepage from "scenes/homePage";
import Loginpage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useState } from "react";

function App() {
  const mode = useState("bright")

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
