import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Main />
    <Skills />
    <Projects/>
    <ContactMe/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
