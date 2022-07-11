import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [styles, setStyles] = useState(true);
  const location = useLocation().pathname;

  useEffect(() => {
    if (location !== "/") setStyles(false);
  }, [location, styles]);

  return (
    <div className={styles ? "main" : "internal"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
