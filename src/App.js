import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About'
import Projects from './components/Projects';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Docs from './components/Docs';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen justify-between">
        <div className="border-solid border-b-2 border-gray">
        <nav className="relative container mx-auto p-5">
            <div className="container flex flex-row items-center justify-between drop-shadow-md ">
                <div className="pt-2">
                    <h1 className="font-bold text-4xl">
                        Matthew Morado's Portfolio
                    </h1>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 flex-row hidden md:block">
                    <a href="#intro">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#journey">My Journey</a>
                    <a href="#docs">Documents</a>
                </div>
                <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer space-y-2 md:hidden">
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>  
            </div>
            <div className={isOpen ? "flex flex-col absolute items-center self-end bg-white py-8 mt-10 left-6 right-6 space-y-6 md:hidden sm:w-auto sm:self-center drop-shadow-md" : "hidden"}>
                <a href="#intro">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#journey">My Journey</a>
                <a href="#docs">Documents</a>
            </div>
        </nav>
    </div>

    <About />

    <Skills />

    <Projects />

    <Journey />

    <Docs />

    <section id="footer">
        <footer className="bg-slate-400">
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
               
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3">
                        <a href="#intro">Home</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#journey">My Journey</a>
                        <a href="#docs">Documents</a>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    
                    <div className="hidden md:block">
                        Copyright &copy; 2023, All Rights Reserved
                    </div>
                </div>
            </div>

        </footer>
    </section>
    </div>
  );
}

export default App;
