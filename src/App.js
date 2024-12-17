import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import QuoteListPage from "./components/QuoteListPage";
import QuoteCreationPage from "./components/QuoteCreationPage";
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/quotes" element={<QuoteListPage />} />
          <Route path="/create-quote" element={<QuoteCreationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
