import React from "react";

export default function About() {
  return (
    <section className="wave dark:text-gray-100 bg-orange-50 mt-0 ">
      <h2 className="mb-12 pt-20 text-4xl font-bold leading-none text-center sm:text-5xl">
        About RealtyHub
      </h2>
      <div className="text-justify px-12 myFont">
        <p className="pb-4 ">
          The genesis of RealtyHub traces back to a moment of personal
          revelation, a spark ignited by the belief that a home is more than
          just a dwelling—it's the canvas upon which countless stories unfold.
          This endeavor, born not out of obligation but from a genuine passion
          for real estate, finds its roots in a personal journey that
          intertwines with the very essence of the homes we aspire to create.
        </p>
        <p className="pb-4 ">
          As we embarked on the journey of learning and growth at ALX Africa,
          the idea of RealtyHub started taking shape during the course of
          various projects, discussions, and reflections. It wasn't a mere
          academic exercise; it was a realization that the realm of real estate
          could be transformed into a vibrant tapestry of dreams and
          possibilities.
        </p>
        <p className="pb-4 ">
          As a Portfolio Project for ALX Africa, RealtyHub symbolizes more than
          the successful completion of an academic assignment. It represents the
          fusion of technical skills, creative vision, and a deep understanding
          of human needs and desires. The journey to bring RealtyHub to life has
          been a transformative one, reflecting the commitment to excellence
          instilled by the Holberton School's rigorous curriculum.
        </p>
        <p className="py-5 ">
          Explore RealtyHub, not just as a project, but as a manifestation of a
          personal and academic journey—a journey that seeks to redefine the way
          we perceive and interact with the spaces we inhabit. Welcome to
          RealtyHub, where the essence of home meets the power of technology.
        </p>

        <a
          href="https://www.holbertonschool.com/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-yellow-900 hover:underline">
            This is a Portfolio Project for Holberton School...
          </p>
        </a>
      </div>
    </section>
  );
}
