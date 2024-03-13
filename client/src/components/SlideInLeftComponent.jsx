import React, { useEffect, useRef } from "react";
import Image5 from "../assets/images/image5.jpg";

const SlideInLeftComponent = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-left");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = targetRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div
      ref={targetRef}
      className=" slide-in-left flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse"
    >
      <img
        src={Image5}
        alt=""
        className="myborder2 h-80 dark:bg-gray-500 aspect-video w-96 hover:scale-105"
      />
      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-orange-50">
        <h3 className="text-3xl font-bold">Property Search</h3>
        <p className="myFont my-6 dark:text-gray-400">
          Discover your dream property through a simple and intuitive search
          experience. Search for properties that match your criteria, explore
          various options, and find the perfect space to call your own. Your
          real estate journey starts with a search tailored to your needs.
        </p>
        <a
          className="flex items-center hover:underline hover:scale-105"
          href="https://realtyhub-2xz1.onrender.com/search?searchTerm="
          target="_blank"
          rel="noreferrer"
        >
          <span className="mr-2 myFont">See more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-10"
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
  );
};

export default SlideInLeftComponent;
