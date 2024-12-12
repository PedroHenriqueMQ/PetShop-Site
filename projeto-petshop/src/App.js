import React from "react";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/AboutUs/AboutUsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavBar from "./components/NavBar/MyNavBar";
import Scheduling from "./pages/Scheduling/SchedulingPage";
import StorePage from "./pages/Store/StorePage";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <Router>
      <div>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/loja" element={<StorePage />} />
          <Route path="/sobre" element={<AboutUs />} />
          <Route path="/agendamento" element={<Scheduling />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
