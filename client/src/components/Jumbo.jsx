import React, { useEffect } from "react";
import Image0 from "../assets/images/image0.jpg";
import Team from "./Team";
import About from "./About";
import Feature from "./Features";
import Form from "./Form";

export default function Jumbo() {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 250;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    // Don't forget to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <section>
      <div className="dark:bg-violet-400  home text-white">
        <div className="container flex flex-col items-center px-4 py-20 pb-24 mx-auto text-center lg:pb-56 md:py-24 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className=" text-5xl font-bold leading-none sm:text-8xl xl:max-w-3xl dark:text-gray-900">
            RealtyHub
          </h1>
          <p className="myFont mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            Experience Excellence, Discover Realty, Elevate Real Estate
            Experiences. Where Each Residence is a Testament to Craftsmanship
            <span>and Personalized Comfort.</span>
          </p>
          <div className="flex flex-wrap justify-center">
            <a
              href="https://realtyhub-2xz1.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg rounded dark:border-gray-700 dark:text-gray-900 bg-yellow-950 text-white hover:opacity-75"
              >
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
      <img
        src={Image0}
        alt=""
        className="reveal w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      />
      <Form />
      <Feature />
      <div className="reveal">
        <About />
      </div>
      <Team />
    </section>
  );
}
