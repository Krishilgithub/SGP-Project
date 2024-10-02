import { useEffect } from "react";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Image } from "./components/Image";
import { Rooms } from "./components/Rooms";
import { Service } from "./components/Service";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
// Remove the external script import as you'll handle this in useEffect
// import "../public/js/main.js";

const App = () => {
  // Using useEffect to handle side effects (DOM manipulation)
  useEffect(() => {
    // Header Scroll
    const nav = document.querySelector(".navbar");
    const handleScroll = () => {
      if (window.scrollY > 0) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  useEffect(() => {
    // nav hide
    const navbarLinks = document.querySelectorAll(".nav-link");
    const navCollapse = document.querySelector(".navbar-collapse");

    const handleClick = () => {
      navCollapse.classList.remove("show");
    };

    navbarLinks.forEach((a) => {
      a.addEventListener("click", handleClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      navbarLinks.forEach((a) => {
        a.removeEventListener("click", handleClick);
      });
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <>
      <Header />
      <Image />
      <Rooms />
      <Service />
      <About />
      <Contact />
      <Login />
      <Footer />
    </>
  );
};

export default App;