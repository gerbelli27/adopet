import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Message from "./components/pages/Message/Message";
import Feed from "./components/pages/Feed/Feed";
import Profile from "./components/pages/Profile/Profile";
import "./App.css";

function App() {
  const [styles, setStyles] = useState(false);
  const [styles2, setStyles2] = useState(false);
  const location = useLocation().pathname.substring(0, 7);

  useEffect(() => {
    if (location === "/") setStyles(true);
    else setStyles(false);
  }, [location, styles]);

  useEffect(() => {
    if (location !== "/login/") setStyles2(true);
    else setStyles2(false);
  }, [location, styles2]);

  return (
    <div
      className={`${styles ? "main" : ""} ${styles2 ? "internal" : "login"} `}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/login/lista" element={<Feed />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login/mensagem" element={<Message />} />
        <Route path="/login/perfil" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
