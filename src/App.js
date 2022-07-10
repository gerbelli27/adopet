import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(true);
  let location = useLocation();
  useEffect(() => {
    if (location !== "/") setData(false);
    else setData(true);
  }, [data, location]);

  return (
    <div className={data ? "internal" : "main"}>
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
