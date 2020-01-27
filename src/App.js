import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{ width: "auto" }}>
      <Header />
      <img src="./maintenance.jpg" alt="" />
      <Footer />
    </div>
  );
}

export default App;
