import React from "react";
import {ThemeProvider} from "./context/ThemeContext";
import {LangProvider} from "./context/LangContext";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <ThemeProvider>
            <LangProvider>
                <TopBar />
                <NavBar />
                <Header />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </LangProvider>
        </ThemeProvider>
    );
};

export default App;