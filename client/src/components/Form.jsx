import React from "react";
import Image1 from "../assets/images/image1.jpg";

export default function Form() {
  return (
    <section className="pt-6 px-4 dark:bg-gray-800 dark:text-gray-100 reveal">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className=" bg-orange-50 w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
          <h1 className="text-5xl font-extrabold dark:text-gray-50">
            Journey into Perfection
          </h1>
          <p className="my-8 myFont">
            <span className="font-medium dark:text-gray-50">
              Welcome to a Nurturing Space-
            </span>
            Homes Designed to Reflect Your Unique Story
          </p>
          <form noValidate="" action="" className="self-stretch space-y-3">
            <div>
              <label htmlFor="name" className="text-sm sr-only">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="p-3 w-full rounded-md focus:ring focus:dark:ring-violet-400 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="text-sm sr-only">
                Email address
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Email address"
                className="p-3 w-full rounded-md focus:ring focus:dark:ring-violet-400 dark:border-gray-700"
              />
            </div>
            <button
              type="button"
              className="text-white bg-yellow-950 w-full py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>
        <img
          src={Image1}
          alt=""
          className="myborder2 object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500 my-16 hover:scale-105"
        />
      </div>
    </section>
  );
}
