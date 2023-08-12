import type { Metadata } from 'next';
import React from "react";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Passionate and dedicated computer science professional',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Projects</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          <strong>Movie Recommendation System</strong><br/>
          <em>April 2023 – May 2023</em><br/>
          Developed a machine learning-based recommendation system using collaborative filtering techniques.
          Utilized Python and scikit-learn to analyze user preferences and make personalized movie
          recommendations.
        </p>

        <p>
          <strong>Piano Tutor – Piano Keys Object Detection</strong><br/>
          <em>February 2023 – May 2023</em><br/>
          Implemented computer vision techniques to detect and locate piano keys in images and videos.
          Utilized OpenCV and deep learning frameworks to build an accurate object detection model.
        </p>

        <p>
          <strong>E-commerce Platform – Database Design</strong><br/>
          <em>January 2023 – May 2023</em><br/>
          Designed the database architecture for an e-commerce platform. Modeled product inventory, user
          profiles, and order management. Implemented SQL queries and optimized database performance.
        </p>

        <p>
          <strong>Lottery Scheduler for xv6 – UNIX-like OS</strong><br/>
          <em>August 2022 – December 2022</em><br/>
          Implemented a lottery scheduler in the xv6 operating system, enhancing process scheduling fairness.
          Utilized C programming and deep understanding of operating system concepts.
        </p>

        <p>
          <strong>A 4-Link Drawing Robot</strong><br/>
          <em>August 2017 – May 2019</em><br/>
          Led a team to design and develop a robotic arm capable of drawing intricate patterns. Incorporated
          concepts from robotics, control systems, and programming to achieve accurate and creative drawings.
        </p>

        <p>
          <strong>Adaptive Control of a Robot using Reinforcement Learning</strong><br/>
          <em>May 2017 – July 2017</em><br/>
          Collaborated on research to apply reinforcement learning techniques to control the behavior of a
          robot. Developed algorithms to optimize the {"robot's"} actions based on environmental feedback.
        </p>
      </div>
    </section>
  );
}
