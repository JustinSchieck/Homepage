import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Containers/Body";

function App() {
  return (
    <div className="App" style={{ width: "auto" }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
