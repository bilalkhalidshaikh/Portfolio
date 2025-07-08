import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import achroWebImg from "@/public//achrowebsolutions.jpg";
import remotebase from "@/public//remotebase.jpg";
import metaheroImg from "@/public//metahero.jpg";
import azimuthImg from "@/public//azimuth.jpg";
import samarImg from "@/public//samar.jpg";
import degenImg from "@/public//degen.jpg";
import guljagImg from "@/public//guljag.jpg";
import sigilImg from "@/public//sigil.jpg";
import mfsDigitalsImg from "@/public//mfsDigitalsImg.jpg";
import tallerMilaImg from "@/public//tallerMilaImg.jpg";
import myHcmImg from "@/public//myHcmImg.jpg";
import myWaterImg from "@/public//myWaterImg.jpg";
import hopeBeliefImg from "@/public//hopeBeliefImg.jpg";
import prayJewelryImg from "@/public//prayJewelryImg.jpg";
import flogaImg from "@/public//flogaImg.jpg";
import myHcmTrainingImg from "@/public//myHcmTrainingImg.jpg";
import faintBrainImg from "@/public//faintBrainImg.jpg";
import veriorDummyImg from "@/public//veriorDummyImg.jpg";
import lectoImg from "@/public//lectoImg.jpg";
import ebookAdminImg from "@/public//ebookAdminImg.jpg";
import enviousWallImg from "@/public//enviousWallImg.jpg";
import concernedRecordImg from "@/public//concernedRecordImg.jpg";
import stormySpadeImg from "@/public//stormySpadeImg.jpg";
import determinedBearImg from "@/public//determinedBearImg.jpg";
import dogWalkerImg from "@/public//dogWalkerImg.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Software Engineer",
//     location: "Humanforce",
//     description:
//       "Software engineer in the intelliHR platform team. We are a feature enablement team dedicated to developing features for developers, ensuring they are easier to create. We also look after issues of scale and technical debt for developers and the platform.",
//     icon: React.createElement(CgWorkAlt),
//     date: "January 2024 - Present",
//   },
//   {
//     title: "Software Engineer",
//     location: "The University of Queensland",
//     description:
//       "Full-stack software engineer in the Application Development and Support team. Worked on web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations, and Programs and Courses.",
//     icon: React.createElement(CgWorkAlt),
//     date: "November 2022 - January 2024",
//   },
//   {
//     title: "Junior Developer",
//     location: "YouPay",
//     description:
//       "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for mechants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.",
//     icon: React.createElement(CgWorkAlt),
//     date: "February 2022 - November 2022",
//   },
//   {
//     title: "Web Developer",
//     location: "M3 Digital - Contract",
//     description:
//       "Front-end development for a variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain. Developed high quality landing pages and front end features using HTML, CSS, SCSS, JavaScript and Liquid.",
//     icon: React.createElement(CgWorkAlt),
//     date: "September 2021 - February 2022",
//   },
// ] as const;
export const experiencesData = [
  {
    title: "Full Stack Engineer & Lead Developer",
    location: "Achroweb Solutions",
    description:
      "Led AI-powered SaaS development using Next.js, Supabase, FastAPI, and OpenAI, implementing scalable microservices with Kubernetes, LangGraph, and CrewAI. Architected full-stack automation pipelines with hybrid memory (Redis, Pinecone) and delivered multilingual, interactive user experiences through agentic LLM workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 – Present",
  },
  {
    title: "SaaS Engineer & Tech Architect",
    location: "TFTSOL",
    description:
      "Designed backend-first SaaS platforms using Node.js, PostgreSQL, RabbitMQ, and GraphQL. Architected secure APIs, real-time messaging systems, and distributed service layers. Led multi-tenant dashboard systems and implemented async operations across large-scale client infrastructures.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 – 2023",
  },
  {
    title: "Web Platform Engineer & Performance Optimizer",
    location: "VERIOR Technologies",
    description:
      "Built enterprise-grade web systems using React, TypeScript, and REST APIs. Optimized UX/UI performance with SSR, code-splitting, and core web vitals. Applied cloud deployment and CI/CD for production-grade rollout with advanced web security protocols.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 – 2022",
  },
  {
    title: "Frontend Lead & Tech Strategist",
    location: "Level Up Tech Studios",
    description:
      "Delivered SEO-optimized, mobile-first web apps with React, Tailwind CSS, and Next.js. Engineered component libraries, collaborated on design implementation, and executed responsive design systems for multiple B2B clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 – 2021",
  },
] as const;

// export const projectsData = [
//   {
//     title: "CryptoCrowd",
//     description:
//       "Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently posting on Twitter. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.",
//     tags: ["JavaScript", "React", "Express.js", "AWS"],
//     icons: [
//       "logos:aws",
//       "logos:javascript",
//       "logos:react",
//       "logos:bootstrap",
//       "logos:express",
//     ],
//     imageUrl: cryptoCrowdImg,
//     githubLink: "https://github.com/ben04rogers/cab432-assignment-2",
//     demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
//   },
//   {
//     title: "OzDevs",
//     description:
//       "Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards.  Companies can pay a monthly fee to be able to message developers on the site and view their information.",
//     tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
//     icons: [
//       "logos:laravel",
//       "logos:php",
//       "logos:javascript",
//       "devicon:tailwindcss",
//       "logos:mysql",
//     ],
//     imageUrl: ozdevsImg,
//     urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
//     githubLink: "https://github.com/ben04rogers/ozdevs-v2",
//   },
//   {
//     title: "Company Asset Trading",
//     description:
//       "Client-server system written in Java for trading of virtual assets within departments of a company. Facilitated trades via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.",
//     tags: ["Java", "MariaDB", "Swing"],
//     icons: ["logos:java", "logos:mariadb-icon"],
//     imageUrl: assetTradingImg,
//     githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
//   },
//   // {
//   //   title: "Euphorus",
//   //   description:
//   //     "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
//   //   tags: ["JavaScript", "React", "Bootstrap"],
//   //   icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
//   //   imageUrl: euphorusImg,
//   //   githubLink: "https://github.com/ben04rogers/cab230assignment1",
//   // },
//   // {
//   //   title: "Country Happiness API",
//   //   description:
//   //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
//   //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
//   //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
//   //   imageUrl: euphorusBackendImg,
//   //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
//   // },
//   {
//     title: "Techprowl Computer Auction",
//     description:
//       "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
//     tags: ["Python", "Flask", "Bootstrap", "SQLite"],
//     icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
//     imageUrl: techprowlImg,
//     githubLink: "https://github.com/ben04rogers/computer-auction",
//     urlLink: "https://techprowl.herokuapp.com",
//   },
//   {
//     title: "Task Manager Console App",
//     description:
//       "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
//     tags: ["C#"],
//     icons: ["devicon:csharp"],
//     imageUrl: taskManagerImg,
//     githubLink: "https://github.com/ben04rogers/task-manager",
//   },
//   {
//     title: "Family Tree Shortest Path",
//     description:
//       "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
//     tags: ["Python"],
//     icons: ["logos:python"],
//     imageUrl: familyTreeImg,
//     githubLink: "https://github.com/ben04rogers/breadth-first-search",
//     demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
//   },
//   {
//     title: "Arduino Binary Game",
//     description:
//       "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
//     tags: ["C"],
//     icons: ["devicon:c"],
//     imageUrl: binaryGameImg,
//     githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
//     demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
//   },
// ] as const;

// export const projectsData = [
//   {
//     title: "Achro Web Solutions",
//     description:
//       "A professional web development agency website offering bespoke digital solutions. Features a responsive design, interactive client portfolio, and integrated contact form for seamless user engagement. Built with React and Tailwind CSS, hosted on scalable cloud infrastructure for optimal performance.",
//     tags: ["JavaScript", "React", "Tailwind", "Node.js"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:nodejs",
//     ],
//     imageUrl: achroWebImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://www.achrowebsolutions.com/",
//   },
//   {
//     title: "Weary Chess",
//     description:
//       "An online chess platform for casual and competitive players. Supports real-time multiplayer matches, leaderboards, and user profiles. Developed with React for a dynamic frontend, Express.js, and Socket.io for real-time communication, ensuring a scalable and engaging gaming experience.",
//     tags: ["JavaScript", "React", "Express.js", "Socket.io"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:express",
//       "logos:socketio",
//     ],
//     imageUrl: wearyChessImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://weary-chess.surge.sh/",
//   },
//   {
//     title: "Metahero 2021",
//     description:
//       "A blockchain-based NFT marketplace for trading digital collectibles. Users can browse, purchase, and sell assets using Web3.js for secure transactions. Built with React and Bootstrap for a responsive interface, optimized for high transaction throughput and user accessibility.",
//     tags: ["JavaScript", "React", "Web3.js", "Bootstrap"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:web3js",
//       "logos:bootstrap",
//     ],
//     imageUrl: metaheroImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://metahero-2021.surge.sh/",
//   },
//   {
//     title: "Azimuth Verior",
//     description:
//       "A creative portfolio website showcasing digital projects with dynamic galleries and smooth animations. Built with Next.js for server-side rendering, Tailwind CSS for styling, and Framer Motion for interactivity. Optimized for SEO, fast load times, and cross-device compatibility.",
//     tags: ["JavaScript", "Next.js", "Tailwind", "Framer"],
//     icons: [
//       "logos:javascript",
//       "logos:nextjs",
//       "devicon:tailwindcss",
//       "logos:framer",
//     ],
//     imageUrl: azimuthImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://azimuth-verior.surge.sh/",
//   },
//   {
//     title: "Samar Creative",
//     description:
//       "A branding-focused creative agency website featuring project showcases, client testimonials, and a blog. Developed with React and Tailwind CSS for a modern, responsive design. Hosted on Vercel for seamless deployment, with a focus on SEO and enhanced user engagement.",
//     tags: ["JavaScript", "React", "Tailwind", "Vercel"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:vercel",
//     ],
//     imageUrl: samarImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://samar-creative.vercel.app/",
//   },
//   {
//     title: "The Degen Diaries",
//     description:
//       "A blog platform for cryptocurrency enthusiasts, supporting user-generated posts, comments, and social sharing. Built with Next.js for server-side rendering and MongoDB for data storage. Hosted on Vercel with a serverless backend, ensuring scalability and low latency for global users.",
//     tags: ["JavaScript", "Next.js", "MongoDB", "Vercel"],
//     icons: [
//       "logos:javascript",
//       "logos:nextjs",
//       "logos:mongodb",
//       "logos:vercel",
//     ],
//     imageUrl: degenImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://the-degen-diaries.vercel.app/",
//   },
//   {
//     title: "Guljag",
//     description:
//       "A corporate website for a manufacturing company, showcasing products and services with a professional design. Built with React and Bootstrap for a responsive layout, integrated with a CMS for easy content updates. Optimized for performance and cross-browser compatibility.",
//     tags: ["JavaScript", "React", "Bootstrap", "Node.js"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:bootstrap",
//       "logos:nodejs",
//     ],
//     imageUrl: guljagImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://guljag.surge.sh/",
//   },
//   {
//     title: "My Sigil",
//     description:
//       "A creative platform for designing and sharing custom sigils. Features an interactive editor and gallery. Developed with React for a dynamic frontend and Firebase for real-time data storage, ensuring a seamless user experience with robust backend support.",
//     tags: ["JavaScript", "React", "Firebase", "Tailwind"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:firebase",
//       "devicon:tailwindcss",
//     ],
//     imageUrl: sigilImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://my-sigil.surge.sh/",
//   },
//   {
//     title: "MFS Digitals",
//     description:
//       "A digital agency website offering marketing and web development services. Includes client portfolios and contact forms. Built with React and Tailwind CSS for a modern design, with Node.js backend for handling inquiries, optimized for SEO and performance.",
//     tags: ["JavaScript", "React", "Tailwind", "Node.js"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:nodejs",
//     ],
//     imageUrl: mfsDigitalsImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://mfsdigitals.surge.sh/",
//   },
//   {
//     title: "El Taller de Mila",
//     description:
//       "An e-commerce platform for handmade crafts, featuring product listings, cart, and payment integration. Built with React and Stripe for secure transactions, with Bootstrap for responsive design. Optimized for user experience and fast checkout processes.",
//     tags: ["JavaScript", "React", "Stripe", "Bootstrap"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:stripe",
//       "logos:bootstrap",
//     ],
//     imageUrl: tallerMilaImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://eltallerdemila.com/",
//   },
//   {
//     title: "My HCM",
//     description:
//       "A healthcare management portal for patients to book appointments, access medical records, and communicate with providers. Built with React for the frontend, Node.js for the backend, and MySQL for secure data storage. Designed for reliability and intuitive navigation.",
//     tags: ["JavaScript", "React", "Node.js", "MySQL"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:nodejs",
//       "logos:mysql",
//     ],
//     imageUrl: myHcmImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://myhcm.pk/",
//   },
//   {
//     title: "My Water",
//     description:
//       "A water delivery service website with online ordering and subscription management. Built with React for a responsive frontend and Node.js for order processing, with MongoDB for data storage. Optimized for user convenience and efficient backend operations.",
//     tags: ["JavaScript", "React", "Node.js", "MongoDB"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:nodejs",
//       "logos:mongodb",
//     ],
//     imageUrl: myWaterImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://mywater.pk/",
//   },
//   {
//     title: "Hope and Belief",
//     description:
//       "A non-profit organization website promoting community initiatives. Features event listings, donation forms, and newsletters. Built with React and Tailwind CSS for a modern design, with Firebase for real-time updates and secure data handling.",
//     tags: ["JavaScript", "React", "Tailwind", "Firebase"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:firebase",
//     ],
//     imageUrl: hopeBeliefImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://hopeandbelief.com/",
//   },
//   {
//     title: "Pray With Me Jewelry",
//     description:
//       "An e-commerce platform for custom jewelry, featuring product catalogs, shopping cart, and Stripe payment integration. Built with React for a responsive frontend and Bootstrap for styling. Optimized for fast checkout, secure transactions, and cross-device compatibility.",
//     tags: ["JavaScript", "React", "Stripe", "Bootstrap"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:stripe",
//       "logos:bootstrap",
//     ],
//     imageUrl: prayJewelryImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://praywithmejewelry.com/",
//   },
//   {
//     title: "Floga",
//     description:
//       "A wellness platform offering meditation and fitness resources. Features subscription plans and user dashboards. Built with Next.js for server-side rendering and Tailwind CSS for styling, with Firebase for authentication and data storage, ensuring scalability.",
//     tags: ["JavaScript", "Next.js", "Tailwind", "Firebase"],
//     icons: [
//       "logos:javascript",
//       "logos:nextjs",
//       "devicon:tailwindcss",
//       "logos:firebase",
//     ],
//     imageUrl: flogaImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://floga.in/",
//   },
//   {
//     title: "My HCM Training",
//     description:
//       "An online training portal for healthcare professionals, offering courses and certifications. Built with React for a dynamic frontend, Node.js for the backend, and MySQL for data management. Designed for secure access, user progress tracking, and seamless navigation.",
//     tags: ["JavaScript", "React", "Node.js", "MySQL"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:nodejs",
//       "logos:mysql",
//     ],
//     imageUrl: myHcmTrainingImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://myhcmtraining.com/",
//   },
// ] as const;

// export const projectsData = [
//   {
//     title: "Achro Web Solutions",
//     description:
//       "A dynamic web development agency site delivering custom digital solutions. Features a responsive design, interactive portfolio, and seamless contact form. Built with React and Tailwind CSS, hosted on scalable cloud infrastructure for top-tier performance and user engagement.",
//     tags: ["JavaScript", "React", "Tailwind", "Node.js"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:nodejs",
//     ],
//     imageUrl: achroWebImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://www.achrowebsolutions.com/",
//   },
//   {
//     title: "Weary Chess Arena",
//     description:
//       "An immersive online chess platform for players of all levels. Offers real-time multiplayer matches, leaderboards, and user profiles. Developed with React for a sleek frontend and Express.js with Socket.io for real-time gameplay, ensuring scalability and smooth UX.",
//     tags: ["JavaScript", "React", "Express.js", "Socket.io"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:express",
//       "logos:socketio",
//     ],
//     imageUrl: remotebase,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://weary-chess.surge.sh/",
//   },
//   {
//     title: "Metahero NFT Hub",
//     description:
//       "A cutting-edge NFT marketplace for trading digital collectibles on blockchain. Users can browse, buy, and sell assets with Web3.js for secure transactions. Built with React and Bootstrap for a responsive UI, optimized for high throughput and user trust.",
//     tags: ["JavaScript", "React", "Web3.js", "Bootstrap"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:web3js",
//       "logos:bootstrap",
//     ],
//     imageUrl: metaheroImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://metahero-2021.surge.sh/",
//   },
//   {
//     title: "Azimuth Creative",
//     description:
//       "A stunning portfolio site showcasing creative projects with dynamic galleries and fluid animations. Built with Next.js for server-side rendering, Tailwind CSS for styling, and Framer Motion for interactivity. Optimized for SEO and lightning-fast load times.",
//     tags: ["JavaScript", "Next.js", "Tailwind", "Framer"],
//     icons: [
//       "logos:javascript",
//       "logos:nextjs",
//       "devicon:tailwindcss",
//       "logos:framer",
//     ],
//     imageUrl: azimuthImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://azimuth-verior.surge.sh/",
//   },
//   {
//     title: "Samar Branding Studio",
//     description:
//       "A vibrant creative agency site focused on branding, featuring project showcases and client testimonials. Developed with React and Tailwind CSS for a modern UI. Hosted on Vercel for seamless deployment, with a focus on SEO and engaging user experiences.",
//     tags: ["JavaScript", "React", "Tailwind", "Vercel"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:vercel",
//     ],
//     imageUrl: samarImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://samar-creative.vercel.app/",
//   },
//   {
//     title: "Degen Diaries",
//     description:
//       "A lively blog platform for crypto enthusiasts, supporting user posts, comments, and social sharing. Built with Next.js for server-side rendering and MongoDB for data storage. Hosted on Vercel with a serverless backend for scalability and global accessibility.",
//     tags: ["JavaScript", "Next.js", "MongoDB", "Vercel"],
//     icons: [
//       "logos:javascript",
//       "logos:nextjs",
//       "logos:mongodb",
//       "logos:vercel",
//     ],
//     imageUrl: degenImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://the-degen-diaries.vercel.app/",
//   },
//   {
//     title: "Guljag Industries",
//     description:
//       "A professional corporate site for a manufacturing firm, showcasing products and services. Built with React and Bootstrap for a responsive layout, integrated with a CMS for content updates. Optimized for performance, SEO, and cross-browser compatibility.",
//     tags: ["JavaScript", "React", "Bootstrap", "Node.js"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:bootstrap",
//       "logos:nodejs",
//     ],
//     imageUrl: guljagImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://guljag.surge.sh/",
//   },
//   {
//     title: "My Sigil Studio",
//     description:
//       "An innovative platform for designing and sharing custom sigils. Features an interactive editor and gallery. Built with React for a dynamic frontend and Firebase for real-time data, delivering a seamless and creative user experience with robust backend support.",
//     tags: ["JavaScript", "React", "Firebase", "Tailwind"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:firebase",
//       "devicon:tailwindcss",
//     ],
//     imageUrl: sigilImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://my-sigil.surge.sh/",
//   },
//   {
//     title: "MFS Digital Agency",
//     description:
//       "A sleek digital agency site offering marketing and web development services. Features client portfolios and inquiry forms. Built with React and Tailwind CSS for a modern design, with Node.js backend for handling requests, optimized for SEO and speed.",
//     tags: ["JavaScript", "React", "Tailwind", "Node.js"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:nodejs",
//     ],
//     imageUrl: mfsDigitalsImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://mfsdigitals.surge.sh/",
//   },
//   {
//     title: "Mila's Craft Workshop",
//     description:
//       "A charming e-commerce platform for handmade crafts, featuring product listings, cart, and secure payments. Built with React and Stripe for seamless transactions, with Bootstrap for responsive design. Optimized for user experience and fast checkout.",
//     tags: ["JavaScript", "React", "Stripe", "Bootstrap"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:stripe",
//       "logos:bootstrap",
//     ],
//     imageUrl: tallerMilaImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://eltallerdemila.com/",
//   },
//   {
//     title: "My HCM Portal",
//     description:
//       "A robust healthcare management portal for patients to book appointments and access records. Built with React for a dynamic frontend, Node.js for the backend, and MySQL for secure data storage. Designed for reliability, security, and intuitive navigation.",
//     tags: ["JavaScript", "React", "Node.js", "MySQL"],
//     icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mysql"],
//     imageUrl: myHcmImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://myhcm.pk/",
//   },
//   {
//     title: "My Water Delivery",
//     description:
//       "A user-friendly water delivery service site with online ordering and subscriptions. Built with React for a responsive frontend and Node.js for order processing, with MongoDB for data storage. Optimized for convenience and efficient backend operations.",
//     tags: ["JavaScript", "React", "Node.js", "MongoDB"],
//     icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mongodb"],
//     imageUrl: myWaterImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://mywater.pk/",
//   },
//   {
//     title: "Hope & Belief",
//     description:
//       "An inspiring non-profit site promoting community initiatives with event listings and donation forms. Built with React and Tailwind CSS for a modern design, with Firebase for real-time updates and secure data handling, ensuring a compelling user experience.",
//     tags: ["JavaScript", "React", "Tailwind", "Firebase"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:firebase",
//     ],
//     imageUrl: hopeBeliefImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://hopeandbelief.com/",
//   },
//   {
//     title: "Pray Jewelry Store",
//     description:
//       "A sophisticated e-commerce platform for custom jewelry, with product catalogs and Stripe payments. Built with React for a responsive frontend and Bootstrap for styling. Optimized for secure transactions, fast checkout, and cross-device compatibility.",
//     tags: ["JavaScript", "React", "Stripe", "Bootstrap"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:stripe",
//       "logos:bootstrap",
//     ],
//     imageUrl: prayJewelryImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://praywithmejewelry.com/",
//   },
//   {
//     title: "Floga Wellness",
//     description:
//       "A holistic wellness platform offering meditation and fitness resources with subscription plans. Built with Next.js for server-side rendering and Tailwind CSS for styling, with Firebase for authentication and data storage, ensuring scalability and engagement.",
//     tags: ["JavaScript", "Next.js", "Tailwind", "Firebase"],
//     icons: [
//       "logos:javascript",
//       "logos:nextjs",
//       "devicon:tailwindcss",
//       "logos:firebase",
//     ],
//     imageUrl: flogaImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://floga.in/",
//   },
//   {
//     title: "HCM Training Hub",
//     description:
//       "An advanced training portal for healthcare professionals, offering courses and certifications. Built with React for a dynamic frontend, Node.js for the backend, and MySQL for data management. Designed for secure access and progress tracking.",
//     tags: ["JavaScript", "React", "Node.js", "MySQL"],
//     icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mysql"],
//     imageUrl: myHcmTrainingImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://myhcmtraining.com/",
//   },
//   {
//     title: "Faint Brain Labs",
//     description:
//       "An experimental platform for showcasing innovative web projects. Features interactive demos and a sleek design. Built with React and Tailwind CSS for a modern UI, with Node.js for backend logic, optimized for performance and cross-browser compatibility.",
//     tags: ["JavaScript", "React", "Tailwind", "Node.js"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:nodejs",
//     ],
//     imageUrl: faintBrainImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "http://faint-brain.surge.sh/",
//   },
//   {
//     title: "Verior Dummy",
//     description:
//       "A mockup portfolio site for testing creative designs and layouts. Features dynamic content and animations. Built with Next.js for server-side rendering and Tailwind CSS for styling, with Framer Motion for smooth transitions, optimized for rapid prototyping.",
//     tags: ["JavaScript", "Next.js", "Tailwind", "Framer"],
//     icons: [
//       "logos:javascript",
//       "logos:nextjs",
//       "devicon:tailwindcss",
//       "logos:framer",
//     ],
//     imageUrl: veriorDummyImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://verior-dummy.surge.sh/",
//   },
//   {
//     title: "Lecto Reader",
//     description:
//       "A digital reading platform for e-books and articles, with a clean and intuitive interface. Built with React for a responsive frontend and Firebase for user authentication and data storage. Optimized for seamless reading and cross-device compatibility.",
//     tags: ["JavaScript", "React", "Firebase", "Bootstrap"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:firebase",
//       "logos:bootstrap",
//     ],
//     imageUrl: lectoImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://lecto.surge.sh/",
//   },
//   {
//     title: "Ebook Admin Dashboard",
//     description:
//       "A powerful admin dashboard for managing e-book content and user accounts. Built with React for a dynamic interface and Node.js with MongoDB for backend data management. Designed for efficient content curation and secure administrative operations.",
//     tags: ["JavaScript", "React", "Node.js", "MongoDB"],
//     icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mongodb"],
//     imageUrl: ebookAdminImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://ebook-admin.surge.sh/",
//   },
//   {
//     title: "Envious Wall Gallery",
//     description:
//       "A visually stunning gallery platform for showcasing digital art. Features interactive displays and filters. Built with React and Tailwind CSS for a modern UI, with Firebase for real-time data, optimized for engagement and cross-device accessibility.",
//     tags: ["JavaScript", "React", "Tailwind", "Firebase"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:firebase",
//     ],
//     imageUrl: enviousWallImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://envious-wall.surge.sh/",
//   },
//   {
//     title: "Concerned Record",
//     description:
//       "A secure platform for managing and sharing digital records. Features encrypted storage and user access controls. Built with React for a responsive frontend and Node.js with MySQL for backend security, optimized for data integrity and user trust.",
//     tags: ["JavaScript", "React", "Node.js", "MySQL"],
//     icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mysql"],
//     imageUrl: concernedRecordImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://concerned-record.surge.sh/",
//   },
//   {
//     title: "Stormy Spade",
//     description:
//       "A creative project showcase with bold visuals and interactive elements. Built with Next.js for server-side rendering and Tailwind CSS for styling, with Framer Motion for animations. Optimized for SEO, fast load times, and immersive user experiences.",
//     tags: ["JavaScript", "Next.js", "Tailwind", "Framer"],
//     icons: [
//       "logos:javascript",
//       "logos:nextjs",
//       "devicon:tailwindcss",
//       "logos:framer",
//     ],
//     imageUrl: stormySpadeImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://stormy-spade.surge.sh/",
//   },
//   {
//     title: "Determined Bear",
//     description:
//       "A motivational platform offering productivity tools and goal tracking. Built with React for a dynamic frontend and Firebase for real-time data and authentication. Designed for user engagement, cross-device compatibility, and seamless performance.",
//     tags: ["JavaScript", "React", "Firebase", "Tailwind"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "logos:firebase",
//       "devicon:tailwindcss",
//     ],
//     imageUrl: determinedBearImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://determined-bear.surge.sh/",
//   },
//   {
//     title: "Dog Walker App",
//     description:
//       "A convenient app for booking dog walking services, with scheduling and payment features. Built with React and Tailwind CSS for a modern UI, hosted on Vercel for scalability. Integrated with Stripe for secure payments, optimized for user convenience.",
//     tags: ["JavaScript", "React", "Tailwind", "Stripe"],
//     icons: [
//       "logos:javascript",
//       "logos:react",
//       "devicon:tailwindcss",
//       "logos:stripe",
//     ],
//     imageUrl: dogWalkerImg,
//     githubLink: "https://github.com/bilalkhalidshaikh",
//     urlLink: "https://testdogwalker.vercel.app/",
//   },
// ] as const;

export interface ProjectData {
  title: string;
  description: string;
  tags: readonly string[];
  icons: readonly string[];
  imageUrl: any; // Placeholder, replace with StaticImageData in actual implementation
  githubLink?: string;
  urlLink?: string;
  demoLink?: string;
}

export interface ProjectsData {
  ecommerce: ProjectData[];
  landingPages: ProjectData[];
  dashboards: ProjectData[];
  portfolios: ProjectData[];
  webApps: ProjectData[];
  blogs: ProjectData[];
  all: ProjectData[];
}

export const projectsData: ProjectsData = {
  ecommerce: [
    {
      title: "Mila's Craft Boutique",
      description:
        "A charming e-commerce platform for handmade crafts, featuring product listings, cart, and secure payments. Built with React and Stripe for seamless transactions, with Bootstrap for responsive design. Optimized for fast checkout and user-friendly navigation.",
      tags: ["JavaScript", "React", "Stripe", "Bootstrap"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:stripe",
        "logos:bootstrap",
      ],
      imageUrl: tallerMilaImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://eltallerdemila.com/",
    },
    {
      title: "Pray Jewelry Store",
      description:
        "A sophisticated e-commerce site for custom jewelry, with product catalogs and Stripe payments. Built with React for a responsive frontend and Bootstrap for styling. Optimized for secure transactions, fast checkout, and cross-device compatibility.",
      tags: ["JavaScript", "React", "Stripe", "Bootstrap"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:stripe",
        "logos:bootstrap",
      ],
      imageUrl: prayJewelryImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://praywithmejewelry.com/",
    },
    {
      title: "My Water Delivery",
      description:
        "A user-friendly water delivery service site with online ordering and subscriptions. Built with React for a responsive frontend and Node.js for order processing, with MongoDB for data storage. Optimized for convenience and efficient backend operations.",
      tags: ["JavaScript", "React", "Node.js", "MongoDB"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:nodejs",
        "logos:mongodb",
      ],
      imageUrl: myWaterImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://mywater.pk/",
    },
  ],
  landingPages: [
    {
      title: "Achro Web Solutions",
      description:
        "A dynamic agency landing page offering custom digital solutions. Features a responsive design, interactive portfolio, and contact form. Built with React and Tailwind CSS, hosted on scalable cloud infrastructure for top-tier performance and engagement.",
      tags: ["JavaScript", "React", "Tailwind", "Node.js"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:nodejs",
      ],
      imageUrl: achroWebImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://www.achrowebsolutions.com/",
    },
    {
      title: "Guljag Industries",
      description:
        "A professional corporate landing page for a manufacturing firm, showcasing products and services. Built with React and Bootstrap for a responsive layout, with a CMS for content updates. Optimized for performance, SEO, and cross-browser compatibility.",
      tags: ["JavaScript", "React", "Bootstrap", "Node.js"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:bootstrap",
        "logos:nodejs",
      ],
      imageUrl: guljagImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://guljag.surge.sh/",
    },
    {
      title: "MFS Digital Agency",
      description:
        "A sleek digital agency landing page offering marketing and web services. Features client portfolios and inquiry forms. Built with React and Tailwind CSS for a modern design, with Node.js backend for requests, optimized for SEO and speed.",
      tags: ["JavaScript", "React", "Tailwind", "Node.js"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:nodejs",
      ],
      imageUrl: mfsDigitalsImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://mfsdigitals.surge.sh/",
    },
    {
      title: "Hope & Belief",
      description:
        "An inspiring non-profit landing page promoting community initiatives with event listings and donation forms. Built with React and Tailwind CSS for a modern design, with Firebase for real-time updates and secure data handling.",
      tags: ["JavaScript", "React", "Tailwind", "Firebase"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:firebase",
      ],
      imageUrl: hopeBeliefImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://hopeandbelief.com/",
    },
    {
      title: "Floga Wellness",
      description:
        "A holistic wellness landing page offering meditation and fitness resources with subscription plans. Built with Next.js for server-side rendering and Tailwind CSS for styling, with Firebase for authentication and data storage.",
      tags: ["JavaScript", "Next.js", "Tailwind", "Firebase"],
      icons: [
        "logos:javascript",
        "logos:nextjs",
        "devicon:tailwindcss",
        "logos:firebase",
      ],
      imageUrl: flogaImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://floga.in/",
    },
  ],
  dashboards: [
    {
      title: "Ebook Admin Dashboard",
      description:
        "A powerful admin dashboard for managing e-book content and user accounts. Built with React for a dynamic interface and Node.js with MongoDB for backend data management. Designed for efficient content curation and secure administrative operations.",
      tags: ["JavaScript", "React", "Node.js", "MongoDB"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:nodejs",
        "logos:mongodb",
      ],
      imageUrl: ebookAdminImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://ebook-admin.surge.sh/",
    },
    {
      title: "HCM Training Hub",
      description:
        "An advanced training dashboard for healthcare professionals, offering courses and certifications. Built with React for a dynamic frontend, Node.js for the backend, and MySQL for data management. Designed for secure access and progress tracking.",
      tags: ["JavaScript", "React", "Node.js", "MySQL"],
      icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mysql"],
      imageUrl: myHcmTrainingImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://myhcmtraining.com/",
    },
    {
      title: "Concerned Record",
      description:
        "A secure dashboard for managing and sharing digital records with encrypted storage and access controls. Built with React for a responsive frontend and Node.js with MySQL for backend security, optimized for data integrity and user trust.",
      tags: ["JavaScript", "React", "Node.js", "MySQL"],
      icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mysql"],
      imageUrl: concernedRecordImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://concerned-record.surge.sh/",
    },
  ],
  portfolios: [
    {
      title: "Azimuth Creative",
      description:
        "A stunning portfolio site showcasing creative projects with dynamic galleries and fluid animations. Built with Next.js for server-side rendering, Tailwind CSS for styling, and Framer Motion for interactivity. Optimized for SEO and fast load times.",
      tags: ["JavaScript", "Next.js", "Tailwind", "Framer"],
      icons: [
        "logos:javascript",
        "logos:nextjs",
        "devicon:tailwindcss",
        "logos:framer",
      ],
      imageUrl: azimuthImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://azimuth-verior.surge.sh/",
    },
    {
      title: "Samar Branding Studio",
      description:
        "A vibrant portfolio for a creative agency, featuring project showcases and testimonials. Built with React and Tailwind CSS for a modern UI. Hosted on Vercel for seamless deployment, with a focus on SEO and engaging user experiences.",
      tags: ["JavaScript", "React", "Tailwind", "Vercel"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:vercel",
      ],
      imageUrl: samarImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://samar-creative.vercel.app/",
    },
    {
      title: "Verior Dummy",
      description:
        "A mockup portfolio site for testing creative designs and layouts. Features dynamic content and animations. Built with Next.js for server-side rendering and Tailwind CSS for styling, with Framer Motion for smooth transitions, optimized for prototyping.",
      tags: ["JavaScript", "Next.js", "Tailwind", "Framer"],
      icons: [
        "logos:javascript",
        "logos:nextjs",
        "devicon:tailwindcss",
        "logos:framer",
      ],
      imageUrl: veriorDummyImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://verior-dummy.surge.sh/",
    },
    {
      title: "Envious Wall Gallery",
      description:
        "A visually stunning portfolio for digital art, with interactive displays and filters. Built with React and Tailwind CSS for a modern UI, with Firebase for real-time data, optimized for engagement and cross-device accessibility.",
      tags: ["JavaScript", "React", "Tailwind", "Firebase"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:firebase",
      ],
      imageUrl: enviousWallImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://envious-wall.surge.sh/",
    },
    {
      title: "Stormy Spade",
      description:
        "A bold portfolio showcasing creative projects with interactive elements. Built with Next.js for server-side rendering and Tailwind CSS for styling, with Framer Motion for animations. Optimized for SEO, fast load times, and immersive experiences.",
      tags: ["JavaScript", "Next.js", "Tailwind", "Framer"],
      icons: [
        "logos:javascript",
        "logos:nextjs",
        "devicon:tailwindcss",
        "logos:framer",
      ],
      imageUrl: stormySpadeImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://stormy-spade.surge.sh/",
    },
  ],
  webApps: [
    {
      title: "Weary Chess Arena",
      description:
        "An immersive online chess platform for players of all levels. Offers real-time multiplayer matches, leaderboards, and profiles. Built with React for a sleek frontend and Express.js with Socket.io for real-time gameplay, ensuring scalability.",
      tags: ["JavaScript", "React", "Express.js", "Socket.io"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:express",
        "logos:socketio",
      ],
      imageUrl: remotebase,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://weary-chess.surge.sh/",
    },
    {
      title: "Metahero NFT Hub",
      description:
        "A cutting-edge NFT marketplace for trading digital collectibles on blockchain. Users can browse, buy, and sell assets with Web3.js for secure transactions. Built with React and Bootstrap for a responsive UI, optimized for high throughput.",
      tags: ["JavaScript", "React", "Web3.js", "Bootstrap"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:web3js",
        "logos:bootstrap",
      ],
      imageUrl: metaheroImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://metahero-2021.surge.sh/",
    },
    {
      title: "My Sigil Studio",
      description:
        "An innovative platform for designing and sharing custom sigils. Features an interactive editor and gallery. Built with React for a dynamic frontend and Firebase for real-time data, delivering a seamless and creative user experience.",
      tags: ["JavaScript", "React", "Firebase", "Tailwind"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:firebase",
        "devicon:tailwindcss",
      ],
      imageUrl: sigilImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://my-sigil.surge.sh/",
    },
    {
      title: "My HCM Portal",
      description:
        "A robust healthcare management portal for patients to book appointments and access records. Built with React for a dynamic frontend, Node.js for the backend, and MySQL for secure data storage. Designed for reliability and intuitive navigation.",
      tags: ["JavaScript", "React", "Node.js", "MySQL"],
      icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mysql"],
      imageUrl: myHcmImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://myhcm.pk/",
    },
    {
      title: "Dog Walker App",
      description:
        "A convenient app for booking dog walking services, with scheduling and payment features. Built with React and Tailwind CSS for a modern UI, hosted on Vercel for scalability. Integrated with Stripe for secure payments, optimized for convenience.",
      tags: ["JavaScript", "React", "Tailwind", "Stripe"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:stripe",
      ],
      imageUrl: dogWalkerImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://testdogwalker.vercel.app/",
    },
    {
      title: "Faint Brain Labs",
      description:
        "An experimental platform for showcasing innovative web projects. Features interactive demos and a sleek design. Built with React and Tailwind CSS for a modern UI, with Node.js for backend logic, optimized for performance and cross-browser compatibility.",
      tags: ["JavaScript", "React", "Tailwind", "Node.js"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:nodejs",
      ],
      imageUrl: faintBrainImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "http://faint-brain.surge.sh/",
    },
    {
      title: "Determined Bear",
      description:
        "A motivational platform offering productivity tools and goal tracking. Built with React for a dynamic frontend and Firebase for real-time data and authentication. Designed for user engagement, cross-device compatibility, and seamless performance.",
      tags: ["JavaScript", "React", "Firebase", "Tailwind"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:firebase",
        "devicon:tailwindcss",
      ],
      imageUrl: determinedBearImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://determined-bear.surge.sh/",
    },
  ],
  blogs: [
    {
      title: "Degen Diaries",
      description:
        "A lively blog platform for crypto enthusiasts, supporting user posts, comments, and social sharing. Built with Next.js for server-side rendering and MongoDB for data storage. Hosted on Vercel with a serverless backend for global accessibility.",
      tags: ["JavaScript", "Next.js", "MongoDB", "Vercel"],
      icons: [
        "logos:javascript",
        "logos:nextjs",
        "logos:mongodb",
        "logos:vercel",
      ],
      imageUrl: degenImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://the-degen-diaries.vercel.app/",
    },
    {
      title: "Lecto Reader",
      description:
        "A digital reading platform for e-books and articles, with a clean interface. Built with React for a responsive frontend and Firebase for user authentication and data storage. Optimized for seamless reading and cross-device compatibility.",
      tags: ["JavaScript", "React", "Firebase", "Bootstrap"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:firebase",
        "logos:bootstrap",
      ],
      imageUrl: lectoImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://lecto.surge.sh/",
    },
  ],
  all: [
    {
      title: "Mila's Craft Boutique",
      description:
        "A charming e-commerce platform for handmade crafts, featuring product listings, cart, and secure payments. Built with React and Stripe for seamless transactions, with Bootstrap for responsive design. Optimized for fast checkout and user-friendly navigation.",
      tags: ["JavaScript", "React", "Stripe", "Bootstrap"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:stripe",
        "logos:bootstrap",
      ],
      imageUrl: tallerMilaImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://eltallerdemila.com/",
    },
    {
      title: "Pray Jewelry Store",
      description:
        "A sophisticated e-commerce site for custom jewelry, with product catalogs and Stripe payments. Built with React for a responsive frontend and Bootstrap for styling. Optimized for secure transactions, fast checkout, and cross-device compatibility.",
      tags: ["JavaScript", "React", "Stripe", "Bootstrap"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:stripe",
        "logos:bootstrap",
      ],
      imageUrl: prayJewelryImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://praywithmejewelry.com/",
    },
    {
      title: "My Water Delivery",
      description:
        "A user-friendly water delivery service site with online ordering and subscriptions. Built with React for a responsive frontend and Node.js for order processing, with MongoDB for data storage. Optimized for convenience and efficient backend operations.",
      tags: ["JavaScript", "React", "Node.js", "MongoDB"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:nodejs",
        "logos:mongodb",
      ],
      imageUrl: myWaterImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://mywater.pk/",
    },
    {
      title: "Achro Web Solutions",
      description:
        "A dynamic agency landing page offering custom digital solutions. Features a responsive design, interactive portfolio, and contact form. Built with React and Tailwind CSS, hosted on scalable cloud infrastructure for top-tier performance and engagement.",
      tags: ["JavaScript", "React", "Tailwind", "Node.js"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:nodejs",
      ],
      imageUrl: achroWebImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://www.achrowebsolutions.com/",
    },
    {
      title: "Guljag Industries",
      description:
        "A professional corporate landing page for a manufacturing firm, showcasing products and services. Built with React and Bootstrap for a responsive layout, with a CMS for content updates. Optimized for performance, SEO, and cross-browser compatibility.",
      tags: ["JavaScript", "React", "Bootstrap", "Node.js"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:bootstrap",
        "logos:nodejs",
      ],
      imageUrl: guljagImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://guljag.surge.sh/",
    },
    {
      title: "MFS Digital Agency",
      description:
        "A sleek digital agency landing page offering marketing and web services. Features client portfolios and inquiry forms. Built with React and Tailwind CSS for a modern design, with Node.js backend for requests, optimized for SEO and speed.",
      tags: ["JavaScript", "React", "Tailwind", "Node.js"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:nodejs",
      ],
      imageUrl: mfsDigitalsImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://mfsdigitals.surge.sh/",
    },
    {
      title: "Hope & Belief",
      description:
        "An inspiring non-profit landing page promoting community initiatives with event listings and donation forms. Built with React and Tailwind CSS for a modern design, with Firebase for real-time updates and secure data handling.",
      tags: ["JavaScript", "React", "Tailwind", "Firebase"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:firebase",
      ],
      imageUrl: hopeBeliefImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://hopeandbelief.com/",
    },
    {
      title: "Floga Wellness",
      description:
        "A holistic wellness landing page offering meditation and fitness resources with subscription plans. Built with Next.js for server-side rendering and Tailwind CSS for styling, with Firebase for authentication and data storage.",
      tags: ["JavaScript", "Next.js", "Tailwind", "Firebase"],
      icons: [
        "logos:javascript",
        "logos:nextjs",
        "devicon:tailwindcss",
        "logos:firebase",
      ],
      imageUrl: flogaImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://floga.in/",
    },
    {
      title: "Ebook Admin Dashboard",
      description:
        "A powerful admin dashboard for managing e-book content and user accounts. Built with React for a dynamic interface and Node.js with MongoDB for backend data management. Designed for efficient content curation and secure administrative operations.",
      tags: ["JavaScript", "React", "Node.js", "MongoDB"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:nodejs",
        "logos:mongodb",
      ],
      imageUrl: ebookAdminImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://ebook-admin.surge.sh/",
    },
    {
      title: "HCM Training Hub",
      description:
        "An advanced training dashboard for healthcare professionals, offering courses and certifications. Built with React for a dynamic frontend, Node.js for the backend, and MySQL for data management. Designed for secure access and progress tracking.",
      tags: ["JavaScript", "React", "Node.js", "MySQL"],
      icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mysql"],
      imageUrl: myHcmTrainingImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://myhcmtraining.com/",
    },
    {
      title: "Concerned Record",
      description:
        "A secure dashboard for managing and sharing digital records with encrypted storage and access controls. Built with React for a responsive frontend and Node.js with MySQL for backend security, optimized for data integrity and user trust.",
      tags: ["JavaScript", "React", "Node.js", "MySQL"],
      icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mysql"],
      imageUrl: concernedRecordImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://concerned-record.surge.sh/",
    },
    {
      title: "Azimuth Creative",
      description:
        "A stunning portfolio site showcasing creative projects with dynamic galleries and fluid animations. Built with Next.js for server-side rendering, Tailwind CSS for styling, and Framer Motion for interactivity. Optimized for SEO and fast load times.",
      tags: ["JavaScript", "Next.js", "Tailwind", "Framer"],
      icons: [
        "logos:javascript",
        "logos:nextjs",
        "devicon:tailwindcss",
        "logos:framer",
      ],
      imageUrl: azimuthImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://azimuth-verior.surge.sh/",
    },
    {
      title: "Samar Branding Studio",
      description:
        "A vibrant portfolio for a creative agency, featuring project showcases and testimonials. Built with React and Tailwind CSS for a modern UI. Hosted on Vercel for seamless deployment, with a focus on SEO and engaging user experiences.",
      tags: ["JavaScript", "React", "Tailwind", "Vercel"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:vercel",
      ],
      imageUrl: samarImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://samar-creative.vercel.app/",
    },
    {
      title: "Verior Dummy",
      description:
        "A mockup portfolio site for testing creative designs and layouts. Features dynamic content and animations. Built with Next.js for server-side rendering and Tailwind CSS for styling, with Framer Motion for smooth transitions, optimized for prototyping.",
      tags: ["JavaScript", "Next.js", "Tailwind", "Framer"],
      icons: [
        "logos:javascript",
        "logos:nextjs",
        "devicon:tailwindcss",
        "logos:framer",
      ],
      imageUrl: veriorDummyImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://verior-dummy.surge.sh/",
    },
    {
      title: "Envious Wall Gallery",
      description:
        "A visually stunning portfolio for digital art, with interactive displays and filters. Built with React and Tailwind CSS for a modern UI, with Firebase for real-time data, optimized for engagement and cross-device accessibility.",
      tags: ["JavaScript", "React", "Tailwind", "Firebase"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:firebase",
      ],
      imageUrl: enviousWallImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://envious-wall.surge.sh/",
    },
    {
      title: "Stormy Spade",
      description:
        "A bold portfolio showcasing creative projects with interactive elements. Built with Next.js for server-side rendering and Tailwind CSS for styling, with Framer Motion for animations. Optimized for SEO, fast load times, and immersive experiences.",
      tags: ["JavaScript", "Next.js", "Tailwind", "Framer"],
      icons: [
        "logos:javascript",
        "logos:nextjs",
        "devicon:tailwindcss",
        "logos:framer",
      ],
      imageUrl: stormySpadeImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://stormy-spade.surge.sh/",
    },
    {
      title: "Weary Chess Arena",
      description:
        "An immersive online chess platform for players of all levels. Offers real-time multiplayer matches, leaderboards, and profiles. Built with React for a sleek frontend and Express.js with Socket.io for real-time gameplay, ensuring scalability.",
      tags: ["JavaScript", "React", "Express.js", "Socket.io"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:express",
        "logos:socketio",
      ],
      imageUrl: remotebase,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://weary-chess.surge.sh/",
    },
    {
      title: "Metahero NFT Hub",
      description:
        "A cutting-edge NFT marketplace for trading digital collectibles on blockchain. Users can browse, buy, and sell assets with Web3.js for secure transactions. Built with React and Bootstrap for a responsive UI, optimized for high throughput.",
      tags: ["JavaScript", "React", "Web3.js", "Bootstrap"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:web3js",
        "logos:bootstrap",
      ],
      imageUrl: metaheroImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://metahero-2021.surge.sh/",
    },
    {
      title: "My Sigil Studio",
      description:
        "An innovative platform for designing and sharing custom sigils. Features an interactive editor and gallery. Built with React for a dynamic frontend and Firebase for real-time data, delivering a seamless and creative user experience.",
      tags: ["JavaScript", "React", "Firebase", "Tailwind"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:firebase",
        "devicon:tailwindcss",
      ],
      imageUrl: sigilImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://my-sigil.surge.sh/",
    },
    {
      title: "My HCM Portal",
      description:
        "A robust healthcare management portal for patients to book appointments and access records. Built with React for a dynamic frontend, Node.js for the backend, and MySQL for secure data storage. Designed for reliability and intuitive navigation.",
      tags: ["JavaScript", "React", "Node.js", "MySQL"],
      icons: ["logos:javascript", "logos:react", "logos:nodejs", "logos:mysql"],
      imageUrl: myHcmImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://myhcm.pk/",
    },
    {
      title: "Dog Walker App",
      description:
        "A convenient app for booking dog walking services, with scheduling and payment features. Built with React and Tailwind CSS for a modern UI, hosted on Vercel for scalability. Integrated with Stripe for secure payments, optimized for convenience.",
      tags: ["JavaScript", "React", "Tailwind", "Stripe"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:stripe",
      ],
      imageUrl: dogWalkerImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://testdogwalker.vercel.app/",
    },
    {
      title: "Faint Brain Labs",
      description:
        "An experimental platform for showcasing innovative web projects. Features interactive demos and a sleek design. Built with React and Tailwind CSS for a modern UI, with Node.js for backend logic, optimized for performance and cross-browser compatibility.",
      tags: ["JavaScript", "React", "Tailwind", "Node.js"],
      icons: [
        "logos:javascript",
        "logos:react",
        "devicon:tailwindcss",
        "logos:nodejs",
      ],
      imageUrl: faintBrainImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "http://faint-brain.surge.sh/",
    },
    {
      title: "Degen Diaries",
      description:
        "A lively blog platform for crypto enthusiasts, supporting user posts, comments, and social sharing. Built with Next.js for server-side rendering and MongoDB for data storage. Hosted on Vercel with a serverless backend for global accessibility.",
      tags: ["JavaScript", "Next.js", "MongoDB", "Vercel"],
      icons: [
        "logos:javascript",
        "logos:nextjs",
        "logos:mongodb",
        "logos:vercel",
      ],
      imageUrl: degenImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://the-degen-diaries.vercel.app/",
    },
    {
      title: "Lecto Reader",
      description:
        "A digital reading platform for e-books and articles, with a clean interface. Built with React for a responsive frontend and Firebase for user authentication and data storage. Optimized for seamless reading and cross-device compatibility.",
      tags: ["JavaScript", "React", "Firebase", "Bootstrap"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:firebase",
        "logos:bootstrap",
      ],
      imageUrl: lectoImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://lecto.surge.sh/",
    },
    {
      title: "Determined Bear",
      description:
        "A motivational platform offering productivity tools and goal tracking. Built with React for a dynamic frontend and Firebase for real-time data and authentication. Designed for user engagement, cross-device compatibility, and seamless performance.",
      tags: ["JavaScript", "React", "Firebase", "Tailwind"],
      icons: [
        "logos:javascript",
        "logos:react",
        "logos:firebase",
        "devicon:tailwindcss",
      ],
      imageUrl: determinedBearImg,
      githubLink: "https://github.com/bilalkhalidshaikh",
      urlLink: "https://determined-bear.surge.sh/",
    },
  ],
} as const;

// export const skillsData = [
//   {
//     name: "TypeScript",
//     icon: "logos:typescript-icon",
//   },
//   {
//     name: "PHP",
//     icon: "logos:php",
//   },
//   {
//     name: "Laravel",
//     icon: "logos:laravel",
//   },
//   {
//     name: "React",
//     icon: "logos:react",
//   },
//   {
//     name: "GraphQL",
//     icon: "logos:graphql",
//   },
//   {
//     name: "Node.js",
//     icon: "logos:nodejs-icon",
//   },
//   {
//     name: "Symfony",
//     icon: "logos:symfony",
//   },
//   {
//     name: "Python",
//     icon: "logos:python",
//   },
//   {
//     name: "HTML",
//     icon: "vscode-icons:file-type-html",
//   },
//   {
//     name: "CSS",
//     icon: "vscode-icons:file-type-css",
//   },
//   {
//     name: "SCSS",
//     icon: "logos:sass",
//   },
//   {
//     name: "Git",
//     icon: "logos:git-icon",
//   },
//   {
//     name: "MySQL",
//     icon: "logos:mysql",
//   },
//   {
//     name: "PostgreSQL",
//     icon: "logos:postgresql",
//   },
//   {
//     name: "Linux",
//     icon: "flat-color-icons:linux",
//   },
//   {
//     name: "AWS",
//     icon: "logos:aws",
//   },
//   {
//     name: "Docker",
//     icon: "logos:docker-icon",
//   },
//   {
//     name: "Jenkins",
//     icon: "devicon:jenkins",
//   },
// ] as const;

// lib/data.ts

export const skillsData = [
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    link: "https://nextjs.org/",
  },
  {
    name: "React",
    icon: "logos:react",
    link: "https://reactjs.org/",
  },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    link: "https://tailwindcss.com/",
  },
  {
    name: "ShadCN/UI",
    icon: "mdi:view-dashboard-outline",
    link: "https://ui.shadcn.dev/",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
    link: "https://nodejs.org/",
  },
  {
    name: "Python",
    icon: "logos:python",
    link: "https://www.python.org/",
  },
  {
    name: "TensorFlow.js",
    icon: "logos:tensorflow",
    link: "https://www.tensorflow.org/js",
  },
  {
    name: "LangChain",
    icon: "mdi:link-variant",
    link: "https://www.langchain.com/",
  },
  {
    name: "Supabase",
    icon: "logos:supabase-icon",
    link: "https://supabase.com/",
  },
  {
    name: "Firebase",
    icon: "logos:firebase",
    link: "https://firebase.google.com/",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
    link: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Prisma ORM",
    icon: "logos:prisma",
    link: "https://www.prisma.io/",
  },
  {
    name: "Express.js",
    icon: "simple-icons:express",
    link: "https://expressjs.com/",
  },
  {
    name: "Deno",
    icon: "simple-icons:deno",
    link: "https://deno.com/",
  },
  {
    name: "Pinecone",
    icon: "mdi:pine-tree",
    link: "https://www.pinecone.io/",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: "logos:github-icon",
    link: "https://github.com/",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
    link: "https://www.docker.com/",
  },
  {
    name: "Linux",
    icon: "logos:linux-tux",
    link: "https://www.linux.org/",
  },
  {
    name: "AWS",
    icon: "logos:aws",
    link: "https://aws.amazon.com/",
  },
  {
    name: "Figma",
    icon: "logos:figma",
    link: "https://www.figma.com/",
  },
  {
    name: "Framer Motion",
    icon: "logos:framer",
    link: "https://www.framer.com/motion/",
  },
  {
    name: "OpenAI API",
    icon: "logos:openai-icon",
    link: "https://platform.openai.com/",
  },
  {
    name: "LLM Agents",
    icon: "mdi:robot-outline",
    link: "https://github.com/topics/llm-agent",
  },
  {
    name: "PWA",
    icon: "simple-icons:pwa",
    link: "https://web.dev/progressive-web-apps/",
  },
  {
    name: "React Native",
    icon: "logos:react",
    link: "https://reactnative.dev/",
  },
  {
    name: "Flutter",
    icon: "logos:flutter",
    link: "https://flutter.dev/",
  },
  {
    name: "SQL",
    icon: "mdi:database",
    link: "https://www.w3schools.com/sql/",
  },
  {
    name: "NoSQL",
    icon: "mdi:database-outline",
    link: "https://www.mongodb.com/nosql-explained",
  },
  {
    name: "FastAPI",
    icon: "simple-icons:fastapi",
    link: "https://fastapi.tiangolo.com/",
  },
  {
    name: "CrewAI",
    icon: "mdi:account-group-outline",
    link: "https://github.com/joaomdmoura/crewAI",
  },
  {
    name: "AutoGen",
    icon: "mdi:robot",
    link: "https://microsoft.github.io/autogen/",
  },
  {
    name: "LangGraph",
    icon: "mdi:graph-outline",
    link: "https://www.langgraph.dev/",
  },
] as const;













  export const educationData = [
    {
      institution: "GCUH",
      degree: "Bachelor of Science in Computer Science",
      date: "2022 – Ongoing",
      description:
        "Currently pursuing a rigorous computer science program with focus on algorithms, backend architecture, cloud-native development, and AI-first systems. Building real-world full-stack web and mobile applications using modern development stacks."
    },
    {
      institution: "PANAVERSITY",
      degree: "Certified Agentic & Robotic AI Engineer",
      date: "2024 – Ongoing",
      description:
        "Hands-on training in autonomous AI systems using LangChain, AutoGen, RAG, and memory-based agent frameworks. Specialized in robotic cognition, LLM orchestration, and scalable multi-agent infrastructures integrating business logic and sensor control."
    },
    {
      institution: "PIAIC",
      degree: "Web & Mobile Hybrid Application Developer",
      date: "2020 – 2023",
      description:
        "Completed intensive training in full-stack web and mobile development using React Native, Next.js, Node.js, and cloud databases. Delivered hybrid applications with real-time features, API integration, and production-level UI/UX."
    },
    {
      institution: "Microsoft & LinkedIn Learning",
      degree: "Certified Software Engineer",
      date: "2019 – 2021",
      description:
        "Studied software development lifecycle, clean architecture, agile workflows, and system design. Gained experience in API-first development, scalable backend systems, testing frameworks, and collaborative DevOps practices."
    },
    {
      institution: "Google Learning Academy",
      degree: "Certified Full-Stack Developer",
      date: "2018 – 2019",
      description:
        "Trained in full-stack engineering with frontend (HTML, CSS, JavaScript) and backend (Node.js, Firebase) foundations. Specialized in building responsive interfaces, secure cloud-integrated apps, and scalable real-time database-driven systems."
    }
  ];
