import React from 'react'
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <main className="relative overflow-x-hidden">
            <Navbar />
            <Hero />
            <div className="h-screen w-screen bg-slate-500"></div>
            <div className="h-screen w-screen bg-yellow-400"></div>
        </main>
    )
}
export default App
