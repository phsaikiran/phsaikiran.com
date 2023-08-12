import type { Metadata } from 'next';
import React from "react";
import { ArrowIcon, GitHubIcon, LinkedInIcon, ResumeIcon } from "@/app/icons";

export const metadata: Metadata = {
  title: 'About',
  description: 'Passionate and dedicated computer science professional',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          {"I'm"} currently seeking new and exciting opportunities that allow me to apply my expertise and
          passion in the field of computer science and data science. With a strong foundation in
          intelligent systems, data analysis, and software development,
          {"I'm"} eager to contribute to innovative projects and collaborate with dynamic teams.
        </p>
        <hr/>
        <p>
          During my time as an <b>Applications Engineer at Oracle</b> in Bangalore, India, I had the privilege
          to work on a variety of projects, ranging from enhancing existing Java/Spring applications to
          architecting and developing full-stack solutions from scratch. Leveraging my proficiency in
          technologies like Java, Oracle JET, Docker, Kubernetes, and Jenkins, I championed containerization
          and streamlined continuous integration and deployment processes.
        </p>
        <p>
          My commitment to staying at the forefront of technological advancements led me to my role as a
          <b> Research Assistant</b> at the Institute for Data Analytics at UT Dallas. Here, {"I've"} harnessed my
          analytical prowess to conduct data analysis, develop Java applications, and contribute to
          migrating legacy systems, all while keeping a keen eye on UI test cases and performance
          optimization.
        </p>
        <p>
          My academic journey has been punctuated by noteworthy projects, from a movie recommendation system
          driven by machine learning to object detection for piano keys using computer vision. {"I've"} also
          delved into the intricacies of database design for an e-commerce platform and tackled challenges in
          operating systems with a lottery scheduler for xv6.
        </p>
        <p className="mb-8">
          Beyond technical prowess, {"I've"} demonstrated leadership as the Convenor (Head) of the Institution of
          Engineering and Technology at NITK, fostering an environment of collaboration and knowledge sharing.

          Having been recognized twice with the {"'OAL CRM Org'"} Award at Oracle for my innovative and agile
          approach, {"I'm"} steadfast in my pursuit of excellence, continuously pushing boundaries and embracing
          challenges. {"I'm"} excited to bring my expertise, enthusiasm, and dedication to contribute meaningfully
          to new opportunities and technological frontiers. {"Let's"} connect and explore how we can create a
          transformative impact together!
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/phsaikiran/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedInIcon/>
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon/>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/phsaikiran"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon/>
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon/>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="Sai_Prudhivi_resume.pdf"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <ResumeIcon/>
              <div className="ml-3">Resume</div>
            </div>
            <ArrowIcon/>
          </a>
        </div>
      </div>
    </section>
  );
}
