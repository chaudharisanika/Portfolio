import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Main />
    <Skills />
    <ContactMe/>
    </div>
    </>
  );
}

export default App;
