import Image from 'next/image';

import { name, about, avatar } from './info'
import { ArrowIcon, EmailIcon, GitHubIcon, LinkedInIcon, ResumeIcon } from "@/app/icons";
import React from "react";

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-center my-8 flex-row">
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-2 ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/phsaikiran/"
            className="flex items-center gap-2"
          >
            <LinkedInIcon/>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/phsaikiran"
            className="flex items-center gap-2"
          >
            <GitHubIcon/>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:hxp220011@utdallas.edu"
            className="flex items-center gap-2"
          >
            <EmailIcon/>
          </a>
        </div>
      </div>
      <ul
        className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="Sai_Prudhivi_resume.pdf"
          >
            <ArrowIcon/>
            <p className="h-7">download my resume</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/phsaikiran/"
          >
            <ArrowIcon/>
            <p className="h-7">connect with me on LinkedIn</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
