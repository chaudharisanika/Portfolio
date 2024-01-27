import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Main />
    <Skills />
    </div>
    </>
  );
}

export default App;
