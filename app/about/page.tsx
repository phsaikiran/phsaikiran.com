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
          intelligent systems, data analysis, and software development, {"I'm"} eager to contribute to innovative
          projects and collaborate with dynamic teams.
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
        <hr/>

        <h3 className="font-bold text-xl font-serif">Education</h3>
        <p>
          I hold a Master of Science in Computer Science from The University of Texas at Dallas, where I maintained an
          impressive GPA of 3.93/4. My academic journey has equipped me with a deep understanding of cutting-edge
          technologies in the realm of computer science. Some of the courses {"I've"} excelled in include Machine
          Learning, Statistical Methods, Computer Vision, Natural Language Processing, and Big Data Management and
          Analysis.
        </p>
        <hr/>

        <h3 className="font-bold text-xl font-serif">Technical Expertise</h3>
        <p>
          I possess a diverse set of technical skills, including proficiency in both back-end and front-end development.
          My toolkit includes Java, Node.js, C++, Python, PHP, Rust, and GoLang for back-end development. On the
          front-end, I excel in React.js, Oracle JET, HTML5, CSS3, JavaScript, TypeScript, and jQuery.
        </p>
        <p>
          In the realm of databases, {"I'm"} well-versed in MySQL, Oracle SQL, DynamoDB, and MongoDB. {"I'm"} also
          experienced in various tools and technologies such as Apache Kafka, Docker, Kubernetes, Helm charts, AWS
          Lambda, Git, Jenkins, and GitHub Actions. My training includes certifications in Neural Networks, Deep
          Learning, and Agile SAFe 4 Practitioner.
        </p>
        <hr/>

        <h3 className="font-bold text-xl font-serif">Professional Experience</h3>
        <p>
          As a Research Assistant at The University of Texas at Dallas, {"I've"} actively contributed to enhancing
          security in full-stack Java applications, resulting in the resolution of 100% of reported
          vulnerabilities. {"I've"} also successfully migrated legacy applications to Java LTS and Maven, achieving
          improved security and a 20% performance boost.
        </p>
        <p>
          During my tenure as a Software Developer at Oracle, Bangalore, I played a pivotal role in developing
          performance-enhancing features for Java/Spring applications, resulting in a 30% increase in lead processing
          speed. I also designed real-time log capturing applications that boosted WebLogic team productivity by 90%.
          Leveraging Apache Kafka, I streamlined marketing data processing, reducing lead wait times by 25%.
          Additionally, I implemented Docker and Kubernetes for efficient CI/CD, leading to a 40% reduction in
          deployment times.
        </p>
        <hr/>

        <h3 className="font-bold text-xl font-serif">Academic Projects</h3>
        <p>
          I have a strong background in practical project work, including developing a Movie Recommendation System using
          Machine Learning, implementing Piano Keys Object Detection for a piano tutor application using Computer
          Vision, and creating a full-stack E-commerce platform with a focus on Database Design. {"I've"} also worked on
          projects related to operating systems and robotics.
        </p>
        <hr/>

        <h3 className="font-bold text-xl font-serif">Student Organizations</h3>
        <p className="mb-8">
          As the Convenor of the Institution of Engineering and Technology (IET) at NITK, I led strategic event
          planning, recruitment, and project execution, resulting in a 25% increase in memberships. I fostered
          cross-collaboration among presidents and IET leaders, enhancing organizational synergy and impact.
        </p>
      </div>
    </section>
  );
}
