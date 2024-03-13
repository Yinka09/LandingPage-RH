import React, { useEffect, useRef } from "react";

import Image7 from "../assets/images/image7.jpg";
import SlideInRightComponent from "./SlideInRightComponent";
import SlideInLeftComponent from "./SlideInLeftComponent";

export default function Feature() {
  const targetRef = useRef(null);

  useEffect(() => {
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        // Iterate through each intersection entry
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the slide-in animation class to the target element
            entry.target.classList.add("slide-in-right");
            // Unobserve the target after triggering the animation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, // Define the threshold for triggering the intersection callback
      }
    );

    // Get the current value of the ref
    const currentRef = targetRef.current;

    // If the ref exists, observe it with the IntersectionObserver
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <section className="  px-4 lg:px-8 lg:pt-8 dark:bg-gray-800 dark:text-gray-100 mb-0 mt-10">
      <div className="container mx-auto space-y-12 ">
        <h2 className="mb-20 text-4xl font-bold leading-none text-center sm:text-5xl">
          Features
        </h2>
        <SlideInRightComponent />
        <SlideInLeftComponent />
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row pb-10">
          <img
            src={Image7}
            alt=""
            className=" myborder h-80 dark:bg-gray-500 aspect-video w-96 hover:scale-105"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-orange-50">
            <h3 className="text-3xl font-bold">Property Upload</h3>
            <p className="my-6 text-gray-600 myFont">
              Embark on the journey of showcasing your properties effortlessly.
              Our platform allows you to upload property details with ease,
              providing potential buyers with comprehensive insights into what
              you have to offer.
            </p>
            <a
              className="flex items-center hover:underline hover:scale-105"
              href="https://realtyhub-2xz1.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mr-2 myFont text-gray-600">See more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-10 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
