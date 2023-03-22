// import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

import Profile from "./pages/profile/Profile";

import Chat from "./pages/chat/chat";
import PersonalProfile from "./pages/personalProfile/PersonalProfile";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/register/Register";


function App() {
  return (

    <div>


      <Routes>
        <Route path="/" exact element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<PersonalProfile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Routes>


    </div>


  );
}

export default App;
