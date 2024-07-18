import React from "react";
import { 
  BrowserRouter as 
    Router, 
    Routes, 
    Route 
} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import "./assets/styles/reset.css";
import "./assets/styles/App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;