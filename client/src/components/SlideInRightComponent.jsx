import React, { useEffect, useRef } from "react";
import Image3 from "../assets/images/image3.jpg";

export default function SlideInRightComponent() {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-right");
            observer.unobserve(entry.target); // Unobserve after triggering the animation
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

    // Cleanup observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div
      ref={targetRef}
      className=" flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
    >
      <img
        src={Image3}
        alt=""
        className="myborder h-80 dark:bg-gray-500 aspect-video w-96 hover:scale-105"
      />
      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-orange-50">
        <h3 className="text-3xl font-bold">User Registration</h3>
        <p className="myFont my-6 text-gray-600">
          Experience the seamless process of signing up to unlock exclusive
          features tailored just for you. Whether you're a property owner or a
          prospective buyer, creating an account is your gateway to a
          personalized real estate journey.
        </p>
        <a
          className="flex items-center hover:underline hover:scale-105"
          href="https://realtyhub-2xz1.onrender.com/sign-up"
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
  );
}
