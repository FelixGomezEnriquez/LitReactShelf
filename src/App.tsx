import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./catalog/home/home";
import LitButtonPage from "./pages/button-preview/button-page";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lit-button" element={<LitButtonPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
