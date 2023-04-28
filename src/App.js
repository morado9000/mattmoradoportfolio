import './App.css';
import { useEffect, useState } from 'react';
import About from './components/About'
import Projects from './components/Projects';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Docs from './components/Docs';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = 'Matt M Portfolio';
  }, []);

  return (
    <div className="flex flex-col h-screen justify-between" x-data>
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
               
                <div className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/in/matthew-morado-509285258/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://github.com/morado9000">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                    </a>
                            
                </div>
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
