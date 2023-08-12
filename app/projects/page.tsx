import type { Metadata } from 'next';
import React from "react";
import { ArrowIcon } from "@/app/icons";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Passionate and dedicated computer science professional',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif pb-4">Projects</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <div className="flex flex-col">
          <a href={"#"} target="_blank" className="inline-flex items-center">
            <b className="mr-1">Movie Recommendation System</b>
            <ArrowIcon/>
          </a>
          <div><small>Apr 2023 - May 2023</small></div>
        </div>
        Developed a machine learning-based recommendation system using collaborative filtering techniques.
        Utilized Python and scikit-learn to analyze user preferences and make personalized movie
        recommendations.
        <hr className={"mt-4 mb-8"}/>

        <div className="flex flex-col">
          <a href={"#"} target="_blank" className="inline-flex items-center">
            <b className="mr-1">Piano Tutor – Piano Keys Object Detection</b>
            <ArrowIcon/>
          </a>
          <div><small>Feb 2023 - May 2023</small></div>
        </div>
        Implemented computer vision techniques to detect and locate piano keys in images and videos.
        Utilized OpenCV and deep learning frameworks to build an accurate object detection model.
        <hr className={"mt-4 mb-8"}/>

        <div className="flex flex-col">
          <a href={"https://github.com/phsaikiran/ecommerce"} target="_blank" className="inline-flex items-center">
            <b className="mr-1">E-commerce Platform – Database Design</b>
            <ArrowIcon/>
          </a>
          <div><small>Jan 2023 - May 2023</small></div>
        </div>
        Designed the database architecture for an e-commerce platform. Modeled product inventory, user profiles, and
        order management. Implemented SQL queries and optimized database performance.
        <hr className={"mt-4 mb-8"}/>

        <div className="flex flex-col">
          <a href={"https://github.com/phsaikiran/LotteryScheduler"} target="_blank"
             className="inline-flex items-center">
            <b className="mr-1">Lottery Scheduler for xv6 – UNIX-like OS</b>
            <ArrowIcon/>
          </a>
          <div><small>Aug 2022 - Dec 2022</small></div>
        </div>
        Implemented a lottery scheduler in the xv6 operating system, enhancing process scheduling fairness.
        Utilized C programming and deep understanding of operating system concepts.
        <hr className={"mt-4 mb-8"}/>

        <div className="flex flex-col">
          <a href={"#"} target="_blank" className="inline-flex items-center">
            <b className="mr-1">A 4-Link Drawing Robot</b>
            <ArrowIcon/>
          </a>
          <div><small>Aug 2017 - May 2019</small></div>
        </div>
        Led a team to design and develop a robotic arm capable of drawing intricate patterns. Incorporated concepts from
        robotics, control systems, and programming to achieve accurate and creative drawings.
        <hr className={"mt-4 mb-8"}/>

        <div className="flex flex-col">
          <a href={"#"} target="_blank" className="inline-flex items-center">
            <b className="mr-1">Adaptive Control of a Robot using Reinforcement Learning</b>
            <ArrowIcon/>
          </a>
          <div><small>May 2017 - July 2017</small></div>
        </div>
        Collaborated on research to apply reinforcement learning techniques to control the behavior of a robot.
        Developed algorithms to optimize the {"robot's"} actions based on environmental feedback.
        <hr className={"mt-4 mb-8"}/>
      </div>
    </section>
  );
}
