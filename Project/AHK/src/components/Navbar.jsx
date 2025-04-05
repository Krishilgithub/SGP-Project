import React, {useEffect, useRef, useState} from 'react'
import {useWindowScroll} from "react-use";

const Navbar = () => {

    const navContainerRef = useRef(null);
    // const [isNavVisible, setIsNavVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const{y: currentScrollY} = useWindowScroll();

    const navItems = ["Home", "Rooms", "Service", "About", "Contact", "Log In"];

    useEffect(()=>{
        if(navContainerRef.current){
            if(currentScrollY > lastScrollY){
                // navContainerRef.current.classList.add("hidden");
                navContainerRef.current.style.transform = "translateY(-120%)";
            }else{
                // navContainerRef.current.classList.remove("hidden");
                navContainerRef.current.style.transform = "translateY(0)";
            }
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY]);

    return (
        <div ref={navContainerRef}
            className="fixed inset-x-0 top-2 h-20 bg-dark-color mx-4 rounded-[0.8rem] border-none transition-all duration-700 sm-inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex justify-between items-center">
                    <div id="main-logo">
                        <h1 className="text-text-color main-heading ml-20">AHK</h1>
                    </div>
                    <div id="nav-items" className="justify-between items-center mr-20 min-w-20 gap-10 md:flex hidden">
                        {navItems.map((item, index)=>(
                            <a
                                className="text-text-color text-[16px] nav-items"
                                key={index}>
                                {item}
                            </a>
                        ))}
                    </div>

                    <div>
                        
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Navbar
