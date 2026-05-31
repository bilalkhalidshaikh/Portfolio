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

import { FaServer, FaRobot, FaProjectDiagram, FaCodeBranch } from "react-icons/fa";

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
    name: "Experience", // This is Operations
    hash: "#experience",
  },
  {
    name: "Skills", // This is Arsenal
    hash: "#skills",
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

export type ExperienceData = {
  id: string;
  title: string;
  location: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  keyDeliverables: readonly string[];
  icon: React.ReactNode;
};

export const experiencesData: readonly ExperienceData[] = [
  {
    id: "exp-achro",
    title: "Principal AI Architect",
    location: "Achroweb Solutions | Miami, FL, USA (Remote)",
    date: "2024 – Present",
    shortDescription: "Architecting deterministic multi-agent workflows using LangGraph and CrewAI.",
    fullDescription: "Pioneered the enterprise transition into autonomous agentic infrastructure. Designed asynchronous execution layers and vector-backed memory schemas for high-scale, production-grade LLM deployments.",
    keyDeliverables: [
      "Engineered deterministic multi-agent swarms via LangGraph.",
      "Deployed distributed FastAPI microservices for async execution.",
      "Implemented Qdrant vector memory to eliminate context collapse."
    ],
    icon: React.createElement(FaRobot),
  },
  {
    id: "exp-tft",
    title: "Senior Distributed Systems Engineer",
    location: "TFTSOL | Copenhagen, Denmark (Remote)",
    date: "2021 – 2024",
    shortDescription: "Engineered high-throughput, backend-first SaaS architectures.",
    fullDescription: "Scaled distributed service layers utilizing Node.js, PostgreSQL, and RabbitMQ message brokers. Built fault-tolerant, async execution pipelines handling millions of daily requests for global enterprise clients.",
    keyDeliverables: [
      "Architected secure, high-concurrency REST & GraphQL APIs.",
      "Scaled RabbitMQ messaging clusters for distributed systems.",
      "Optimized PostgreSQL schema performance for massive multi-tenancy."
    ],
    icon: React.createElement(FaServer),
  },
  {
    id: "exp-verior",
    title: "Full-Stack Infrastructure Lead",
    location: "VERIOR Technologies | Helsinki, Finland (Remote)",
    date: "2019 – 2021",
    shortDescription: "Led the deployment of enterprise-grade cloud systems.",
    fullDescription: "Optimized deep React/Next.js architectures with strict SSR rendering and advanced state management. Implemented CI/CD deployment matrices and hardened API security protocols for data-heavy applications.",
    keyDeliverables: [
      "Transitioned legacy SPAs to strict Next.js SSR architectures.",
      "Automated infrastructure deployment via GitHub Actions & Docker.",
      "Hardened application security against OWASP Top 10 vectors."
    ],
    icon: React.createElement(FaProjectDiagram),
  },
  {
    id: "exp-level",
    title: "Frontend Architect",
    location: "Level Up Tech Studios | Islamabad, Pakistan (Remote)",
    date: "2018 – 2019",
    shortDescription: "Engineered the core foundations of scalable web architecture.",
    fullDescription: "Built modular component libraries and performance-optimized, mobile-first platforms for B2B clientele, establishing a flawless baseline in modern DOM manipulation and rendering lifecycles.",
    keyDeliverables: [
      "Authored custom, highly reusable React component libraries.",
      "Drastically reduced First Contentful Paint (FCP) across client sites.",
      "Implemented strict Type-Safe codebases using TypeScript."
    ],
    icon: React.createElement(FaCodeBranch),
  },
] as const;
// @/lib/data.ts
// @/lib/data.ts

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type PerformanceMetric = {
  label: string;
  value: string;
  percentage: number;
};

export type ProjectData = {
  id: string;
  title: string;
  client: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  architecture: readonly string[];
  metrics: readonly string[];
  vitals: readonly PerformanceMetric[];
  tags: readonly string[];
  testimonial?: Testimonial;
};

export const categories = [
  { name: "Autonomous OS Swarms", key: "autonomous" },
  { name: "Cloud Infrastructure", key: "infrastructure" },
  { name: "High-Throughput Pipelines", key: "pipelines" },
] as const;

export type CategoryKey = (typeof categories)[number]["key"];

export const projectsData: Record<CategoryKey, ProjectData[]> = {
  autonomous: [
    {
      id: "the-handler-os",
      title: "The Handler: Autonomous Orchestration OS",
      client: "Getters Premium Group",
      location: "Miami, FL",
      shortDescription: "Asynchronous, event-driven execution layer engineered for multi-agent systems orchestration using atomic locks.",
      fullDescription: "A heavy-duty asynchronous coordination engine built to mitigate multi-agent execution race conditions, recursive state collapse, and token optimization bleed in enterprise agentic deployments.",
      challenge: "Standard LLM agent multi-threading architectures suffer severe state breakdown and exponential latency when orchestration pipelines cross-mutate context graphs concurrently.",
      solution: "Implemented isolated vector-backed episodic state locks using custom LangGraph primitives and low-latency Qdrant memory spaces to build completely deterministic orchestration boundaries.",
      architecture: ["Python AsyncIO Kernel", "FastAPI Broker", "Qdrant Vector State Isolation", "Custom LangGraph Routing Core"],
      metrics: ["Reduced Agent Collision by 99.4%", "Sub-50ms State Lock Latency", "Optimized Core Task Handshakes"],
      vitals: [
        { label: "Concurrency Headroom", value: "+400%", percentage: 92 },
        { label: "Token Overhead Mitigation", value: "-42%", percentage: 78 },
        { label: "State Reliability Index", value: "99.98%", percentage: 98 }
      ],
      tags: ["PYTHON (ASYNC)", "FASTAPI", "QDRANT", "CREWAI", "LANGGRAPH"],
    },
    {
      id: "vanguard-finops",
      title: "Vanguard: Cognitive Synthesis Ledger Swarm",
      client: "Quantum Capital Partners",
      location: "Manhattan, NY",
      shortDescription: "Multi-agent automated multi-jurisdictional transaction matching and financial compliance risk analysis engine.",
      fullDescription: "A high-security, closed-loop financial orchestration matrix that executes multi-agent processing of raw unstructured Bloomberg telemetry, real-time ledgers, and transaction trails.",
      challenge: "Human compliance teams spent roughly 4 to 6 hours reconciling cross-border capital distributions, resulting in systemic front-running asset friction.",
      solution: "Deployed an elite LangChain multi-agent mesh running inside secure Docker enclaves using CrewAI token structures to dynamically ingest, audit, and match balances.",
      architecture: ["LangChain Multi-Agent Swarm", "Dockerized Secure Enclaves", "PostgreSQL Financial Ledger", "Redis Task Queues"],
      metrics: ["92% Compression on Audit Cycles", "High-Throughput Concurrent Data Ingestion", "Zero-Data-Leak Cryptographic Guardrails"],
      vitals: [
        { label: "Audit Latency Reduction", value: "-92%", percentage: 94 },
        { label: "Data Mutability Guard", value: "100%", percentage: 100 },
        { label: "Throughput Optimization", value: "750 MB/s", percentage: 85 }
      ],
      tags: ["FINTECH AI", "LANGCHAIN", "POSTGRESQL", "DOCKER", "CREWAI"],
      testimonial: {
        quote: "This agentic infrastructure completely shattered our performance expectations. It thinks exactly like a seasoned quantitative risk analyst and executes at line rate.",
        author: "Hendrik van der Berg",
        role: "Managing Director, Quantum Capital"
      }
    },
    {
      id: "quantum-defi-oracle",
      title: "Quantum: High-Frequency DeFi Oracle",
      client: "Aura Blockchain Consortium",
      location: "Dubai, UAE",
      shortDescription: "Decentralized, low-latency price oracle feeding real-time institutional liquidity metrics into smart contracts.",
      fullDescription: "A distributed Node.js and Solidity ecosystem designed to aggregate decentralized exchange (DEX) liquidity pool data, process it through a statistical Web3 weighting engine, and feed it into on-chain protocols.",
      challenge: "Legacy oracles were suffering from 12-second block delays, opening the protocol to massive flash-loan arbitrage attacks.",
      solution: "Engineered a custom memory-pooled Node.js aggregator that bypasses standard RPC latency, using WebSockets to push state changes to an optimized Solidity smart contract interface.",
      architecture: ["Solidity Smart Contracts", "Node.js WebSocket Aggregator", "Web3.js Integration", "TimescaleDB Time-Series Engine"],
      metrics: ["Reduced Oracle Latency by 80%", "Secured On-Chain Protocol Execution State", "Zero Arbitrage Exploits Logged"],
      vitals: [
        { label: "Execution Latency", value: "450ms Avg", percentage: 96 },
        { label: "RPC Fetch Optimization", value: "99.9%", percentage: 99 },
        { label: "Network Gas Savings", value: "-35%", percentage: 82 }
      ],
      tags: ["WEB3", "SOLIDITY", "NODE.JS", "WEBSOCKETS", "DEFI"],
    }
  ],
  infrastructure: [
    {
      id: "presenza-paas",
      title: "Presenza: Presence-as-a-Service (PaaS)",
      client: "Presenza Architecture Group",
      location: "Austin, TX",
      shortDescription: "Ultra-luxury, dynamic digital asset instantiation engine featuring automated containerized cloud environments.",
      fullDescription: "A cloud-native web deployment operating environment constructed to dynamically generate, sandbox, and hot-reload client instances with zero manual DevOps intervention.",
      challenge: "Enterprise branding platforms require highly technical engineering overhead to deploy fast dynamic routes, SSL pipelines, and isolated database schemas on-demand.",
      solution: "Engineered an orchestration engine leveraging Next.js generation layers bound to autonomous container triggers running inside highly secure AWS ECS pools.",
      architecture: ["Next.js SSR Blueprinting", "Python Microservices", "AWS ECS / Fargate Pool", "Automated Route53 Injections"],
      metrics: ["100% Automated Infrastructure Delivery", "Zero-Touch Isolated AWS Sandboxing", "Sub-120s Global Cold-Starts"],
      vitals: [
        { label: "Infrastructure Automation", value: "100%", percentage: 100 },
        { label: "Cold-Start Efficiency", value: "112s Avg", percentage: 89 },
        { label: "Compute Density Index", value: "94.6%", percentage: 94 }
      ],
      tags: ["NEXT.JS", "PYTHON", "DOCKER", "AWS ECS", "POSTGRESQL"],
    },
    {
      id: "omninode-router",
      title: "OmniNode: Distributed High-Concurrency Edge Stream",
      client: "AeroLogistics Global",
      location: "Chicago, IL",
      shortDescription: "High-throughput gRPC and persistent WebSocket event routing engine for massive asset telemetry arrays.",
      fullDescription: "A stateful distributed edge mesh tracking continuous positioning arrays and engine health indices from cargo craft arrays simultaneously.",
      challenge: "The existing legacy architecture buckled and dropped critical streaming payloads due to structural memory constraints and JSON parsing friction at scale.",
      solution: "Rewrote the processing layer using native asynchronous FastAPI architectures and decoupled data traffic using lightning-fast gRPC transport arrays and Redis pub/sub routing hubs.",
      architecture: ["FastAPI Asynchronous Pipelines", "gRPC Mesh Interfaces", "Redis Pub/Sub Layering", "Next.js Analytical Control Deck"],
      metrics: ["Sustained High-Density Real-time WSS Feeds", "300ms Processing Latency Drop", "100% Structural Zero-Loss Reliability"],
      vitals: [
        { label: "WSS Frame Recovery", value: "99.999%", percentage: 99 },
        { label: "Memory Footprint Reduction", value: "-58%", percentage: 82 },
        { label: "Payload Capacity Ceiling", value: "Stable Flow", percentage: 90 }
      ],
      tags: ["FASTAPI", "WEBSOCKETS", "gRPC", "REDIS", "NEXT.JS"],
      testimonial: {
        quote: "Our global operational matrix used to encounter blind spots every single day. OmniNode neutralized the latency variance completely. It runs perfectly under max pressure.",
        author: "Sarah Jenkins",
        role: "CTO, AeroLogistics Global"
      }
    },
    {
      id: "horizon-edge-nodes",
      title: "Horizon: Edge-Compute Vision Infrastructure",
      client: "Stratos Security Networks",
      location: "San Jose, CA",
      shortDescription: "Distributed computer vision infrastructure deploying object detection models to remote IoT hardware.",
      fullDescription: "A massive IoT cloud synchronization platform that allows continuous over-the-air (OTA) updates of PyTorch computer vision models to edge cameras globally.",
      challenge: "Pushing heavy model weights to edge cameras over cellular networks resulted in severe packet loss and bricked devices.",
      solution: "Built a differential patching engine using Node.js and AWS S3 that segments AI models into micro-binaries. Managed via a robust React dashboard for real-time fleet health monitoring.",
      architecture: ["Node.js Edge Controller", "React Native Fleet UI", "AWS S3 / CloudFront", "PyTorch Model Pipelines"],
      metrics: ["Reduced Bandwidth Consumption by 74%", "Managed Scaled Deployments across Edge Nodes", "Zero-Bricking Deployment Protocol"],
      vitals: [
        { label: "Fleet Synchronization Rate", value: "99.9%", percentage: 99 },
        { label: "OTA Update Bandwidth", value: "-74%", percentage: 86 },
        { label: "System Uptime", value: "99.99%", percentage: 100 }
      ],
      tags: ["NODE.JS", "REACT", "AWS S3", "IoT EDGE", "PYTHON"],
    }
  ],
  pipelines: [
    {
      id: "the-forge-engine",
      title: "The Forge: High-Ingestion Cognitive Pipeline",
      client: "Forge Deep Systems",
      location: "Seattle, WA",
      shortDescription: "Distributed background task queue cluster processing unstructured document data inputs.",
      fullDescription: "A multi-tenant intake processing system built to digest multi-format document lakes, structural web indices, and real-time audio transcript payloads.",
      challenge: "Massive concurrent text extractions and chunking strategies trigger severe thread pooling bottlenecks and unpredictable server memory leaks.",
      solution: "Constructed an isolated worker infrastructure powered by Celery clusters and Redis message brokers to segment extraction boundaries into safe multitenant environments.",
      architecture: ["Celery Cluster Optimization", "Redis High-Throughput Broker", "Custom Semantic Token Splitters", "LLMOps Pipeline Metrics"],
      metrics: ["High Ingestion Volume Managed Smoothly", "Zero-Downtime Hot-Swappable Worker Scaling", "Fault-Tolerant Automated System Retries"],
      vitals: [
        { label: "Ingestion Velocity", value: "1.2GB/s", percentage: 88 },
        { label: "Memory Leak Threshold", value: "0.00%", percentage: 100 },
        { label: "Queue Processing Speed", value: "Stable Cycle", percentage: 93 }
      ],
      tags: ["LANGCHAIN", "REDIS QUEUE", "CELERY", "FASTAPI", "LLMOps"],
    },
    {
      id: "synapse-medical-rag",
      title: "Synapse: Advanced Deterministic Medical RAG Engine",
      client: "BioNovus MedTech Group",
      location: "Boston, MA",
      shortDescription: "Enterprise-grade semantic ingestion vector layer enforcing absolute deterministic guardrails for clinical labs.",
      fullDescription: "A multi-stage context synthesis framework architected to cross-examine massive, hyper-technical clinical trial indexes and laboratory logs with verifiable citation paths.",
      challenge: "Vanilla vector searches return erratic semantic associations and hallucination patterns that are completely unacceptable in biochemical discovery labs.",
      solution: "Designed parent-child recursive chunk partitioning routines combined with custom neural cache scoring strategies that block generation if context metrics drop below limits.",
      architecture: ["Hierarchical Semantic Chunking", "Qdrant Isolated Clusters", "Custom Caching Topologies", "Neural Text Verification Adapters"],
      metrics: ["Drastic Drop in Operational Token Costs", "99.8% Factual Consistency Index", "Sub-35ms Native Cache Retrieval Speed"],
      vitals: [
        { label: "Context Retrieval Precision", value: "99.8%", percentage: 99 },
        { label: "Token Overhead Mitigation", value: "-64%", percentage: 86 },
        { label: "Query Execution Speed", value: "35ms Avg", percentage: 95 }
      ],
      tags: ["VECTOR DB", "OPENAI", "PYTHON", "RAG", "QDRANT"],
      testimonial: {
        quote: "The precision of the vector alignment layer engineered is extraordinary. It cut down our trial exploration lifecycle by hundreds of highly technical expert hours.",
        author: "Dr. Elias Thorne",
        role: "Lead Systems Chemist, BioNovus"
      }
    },
    {
      id: "nexus-knowledge-graph",
      title: "Nexus: Enterprise Knowledge Graph",
      client: "Veritas Data Corp",
      location: "London, UK",
      shortDescription: "Hybrid GraphRAG data pipeline fusing vector similarity search with explicit graph database relationships.",
      fullDescription: "A massive intelligence layer combining the semantic flexibility of LLMs with the deterministic relationships of Neo4j graph databases to map complex corporate hierarchies and legal entities.",
      challenge: "Vector databases alone could not reliably trace multi-hop legal ownership structures across thousands of disconnected PDF contracts.",
      solution: "Built a Python-based ingestion pipeline using LangChain to extract entities, load them as nodes/edges into Neo4j, and query them using a hybrid Cypher/Vector search protocol.",
      architecture: ["Neo4j Graph Database", "Hybrid GraphRAG Pipelines", "FastAPI Extraction Endpoints", "Next.js Visualization UI"],
      metrics: ["Mapped High-Density Explicit Graph Edges", "100% Deterministic Relationship Tracing", "Zero Hallucination on Entity Ownership"],
      vitals: [
        { label: "Multi-Hop Query Speed", value: "120ms Avg", percentage: 94 },
        { label: "Entity Extraction Accuracy", value: "98.7%", percentage: 98 },
        { label: "Graph Isolation Rating", value: "Excellent", percentage: 85 }
      ],
      tags: ["NEO4J", "GRAPH RAG", "PYTHON", "LANGCHAIN", "NEXT.JS"],
    },
    {
      id: "aegis-semantic-cache",
      title: "Aegis: Distributed Semantic Cache",
      client: "OmniAI Solutions",
      location: "San Francisco, CA",
      shortDescription: "Enterprise-tier intercept layer for LLM pipelines, drastically cutting token consumption and latency.",
      fullDescription: "A high-speed middleware architecture that intercepts redundant AI queries, calculates semantic similarity vectors in-memory, and returns cached responses before hitting downstream paid APIs.",
      challenge: "The client was incurring significant compute overhead on API costs due to thousands of users asking semantically identical questions phrased slightly differently.",
      solution: "Engineered a Redis-backed memory store paired with lightweight, locally hosted embedding models. Requests mathematically similar to cached vectors bypass the external LLM entirely.",
      architecture: ["Redis In-Memory Store", "Local Mini-LM Embeddings", "FastAPI Middleware", "Dockerized Edge Deployment"],
      metrics: ["Cut API Token Spend by 68%", "Sub-20ms Response Time on Cache Hits", "Processed Dense Multi-User Daily Inference Ingestion"],
      vitals: [
        { label: "Cache Hit Ratio", value: "68%", percentage: 68 },
        { label: "Token Overhead Reduction", value: "-68%", percentage: 92 },
        { label: "Edge Response Latency", value: "18ms", percentage: 98 }
      ],
      tags: ["REDIS", "FASTAPI", "LLM OPS", "PYTHON", "DOCKER"],
    }
  ]
};

// export const skillsData = [
//   {
//     name: "TypeScript",
//     icon: "logos:typescript-icon",
//     link: "https://www.typescriptlang.org/",
//   },
//   {
//     name: "JavaScript",
//     icon: "logos:javascript",
//     link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//   },
//   {
//     name: "Next.js",
//     icon: "logos:nextjs-icon",
//     link: "https://nextjs.org/",
//   },
//   {
//     name: "React",
//     icon: "logos:react",
//     link: "https://reactjs.org/",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: "logos:tailwindcss-icon",
//     link: "https://tailwindcss.com/",
//   },
//   {
//     name: "ShadCN/UI",
//     icon: "mdi:view-dashboard-outline",
//     link: "https://ui.shadcn.dev/",
//   },
//   {
//     name: "Node.js",
//     icon: "logos:nodejs-icon",
//     link: "https://nodejs.org/",
//   },
//   {
//     name: "Python",
//     icon: "logos:python",
//     link: "https://www.python.org/",
//   },
//   {
//     name: "TensorFlow.js",
//     icon: "logos:tensorflow",
//     link: "https://www.tensorflow.org/js",
//   },
//   {
//     name: "LangChain",
//     icon: "mdi:link-variant",
//     link: "https://www.langchain.com/",
//   },
//   {
//     name: "Supabase",
//     icon: "logos:supabase-icon",
//     link: "https://supabase.com/",
//   },
//   {
//     name: "Firebase",
//     icon: "logos:firebase",
//     link: "https://firebase.google.com/",
//   },
//   {
//     name: "MongoDB",
//     icon: "logos:mongodb-icon",
//     link: "https://www.mongodb.com/",
//   },
//   {
//     name: "PostgreSQL",
//     icon: "logos:postgresql",
//     link: "https://www.postgresql.org/",
//   },
//   {
//     name: "Prisma ORM",
//     icon: "logos:prisma",
//     link: "https://www.prisma.io/",
//   },
//   {
//     name: "Express.js",
//     icon: "simple-icons:express",
//     link: "https://expressjs.com/",
//   },
//   {
//     name: "Deno",
//     icon: "simple-icons:deno",
//     link: "https://deno.com/",
//   },
//   {
//     name: "Pinecone",
//     icon: "mdi:pine-tree",
//     link: "https://www.pinecone.io/",
//   },
//   {
//     name: "Git",
//     icon: "logos:git-icon",
//     link: "https://git-scm.com/",
//   },
//   {
//     name: "GitHub",
//     icon: "logos:github-icon",
//     link: "https://github.com/",
//   },
//   {
//     name: "Docker",
//     icon: "logos:docker-icon",
//     link: "https://www.docker.com/",
//   },
//   {
//     name: "Linux",
//     icon: "logos:linux-tux",
//     link: "https://www.linux.org/",
//   },
//   {
//     name: "AWS",
//     icon: "logos:aws",
//     link: "https://aws.amazon.com/",
//   },
//   {
//     name: "Figma",
//     icon: "logos:figma",
//     link: "https://www.figma.com/",
//   },
//   {
//     name: "Framer Motion",
//     icon: "logos:framer",
//     link: "https://www.framer.com/motion/",
//   },
//   {
//     name: "OpenAI API",
//     icon: "logos:openai-icon",
//     link: "https://platform.openai.com/",
//   },
//   {
//     name: "LLM Agents",
//     icon: "mdi:robot-outline",
//     link: "https://github.com/topics/llm-agent",
//   },
//   {
//     name: "PWA",
//     icon: "simple-icons:pwa",
//     link: "https://web.dev/progressive-web-apps/",
//   },
//   {
//     name: "React Native",
//     icon: "logos:react",
//     link: "https://reactnative.dev/",
//   },
//   {
//     name: "Flutter",
//     icon: "logos:flutter",
//     link: "https://flutter.dev/",
//   },
//   {
//     name: "SQL",
//     icon: "mdi:database",
//     link: "https://www.w3schools.com/sql/",
//   },
//   {
//     name: "NoSQL",
//     icon: "mdi:database-outline",
//     link: "https://www.mongodb.com/nosql-explained",
//   },
//   {
//     name: "FastAPI",
//     icon: "simple-icons:fastapi",
//     link: "https://fastapi.tiangolo.com/",
//   },
//   {
//     name: "CrewAI",
//     icon: "mdi:account-group-outline",
//     link: "https://github.com/joaomdmoura/crewAI",
//   },
//   {
//     name: "AutoGen",
//     icon: "mdi:robot",
//     link: "https://microsoft.github.io/autogen/",
//   },
//   {
//     name: "LangGraph",
//     icon: "mdi:graph-outline",
//     link: "https://www.langgraph.dev/",
//   },
// ] as const;


// @/lib/data.ts

export const skillsData = [
  {
    category: "Autonomous Systems & Agentic AI",
    skills: [
      { name: "LangChain", icon: "simple-icons:langchain" },
      { name: "CrewAI", icon: "fluent-emoji-high-contrast:robot" }, // Placeholder, use a generic robot/ai icon
      { name: "OpenAI API", icon: "simple-icons:openai" },
      { name: "Vector Search", icon: "carbon:machine-learning-model" },
      { name: "Qdrant", icon: "simple-icons:qdrant" },
      { name: "LangGraph", icon: "carbon:flow-data" },
    ]
  },
  {
    category: "Core Infrastructure & Languages",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "FastAPI", icon: "simple-icons:fastapi" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "WebSockets", icon: "logos:websocket" },
    ]
  },
  {
    category: "Data Topology & Cloud",
    skills: [
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "AWS ECS", icon: "logos:aws" },
      { name: "Redis", icon: "logos:redis" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Celery", icon: "simple-icons:celery" },
      { name: "Neo4j", icon: "logos:neo4j" },
    ]
  }
];








export const educationData = [
  {
    institution: "Panaversity",
    degree: "Certified Agentic & Robotic AI Engineer",
    date: "2024 – Present",
    focus: "Autonomous Systems, LLM Orchestration, Memory-Based Agent Frameworks, Robotic Cognition."
  },
  {
    institution: "PIAIC",
    degree: "Web & Mobile Hybrid Application Developer",
    date: "2020 – 2023",
    focus: "Full-Stack Web Architecture, React Native, Edge Computing Integration."
  },
  {
    institution: "Microsoft / LinkedIn Learning",
    degree: "Certified Software Engineer",
    date: "2019 – 2021",
    focus: "Clean Architecture, API-First System Design, CI/CD DevOps Pipelines."
  },
  {
    institution: "Google Learning Academy",
    degree: "Certified Full-Stack Developer",
    date: "2018 – 2019",
    focus: "Frontend DOM Manipulation, NoSQL Real-Time Databases, Secure API Auth."
  }
];