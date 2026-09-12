import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "doc-intelligence",
    title: "Enterprise Document Intelligence Platform",
    description: "AI-powered document extraction and classification system",
    longDescription:
      "Built an enterprise-grade document intelligence platform using Azure OpenAI and LangChain. The system automatically extracts, classifies, and processes documents with 95%+ accuracy, reducing manual processing time by 70%.",
    tech: ["Azure OpenAI", "LangChain", "FAISS", "Python", "FastAPI", "PostgreSQL"],
    type: "AI",
    highlights: [
      "Semantic search across 100K+ documents",
      "Automated extraction with structured JSON output",
      "Enterprise workflow automation",
      "70% reduction in processing time",
      "$50K+ annual savings",
    ],
    link: "#",
    github: "#",
  },
  {
    id: "emission-forecasting",
    title: "AI-Powered Emission Forecasting System",
    description: "Time-series forecasting for sustainability monitoring",
    longDescription:
      "Developed an LSTM-based time-series forecasting model for CO₂ emissions prediction with R² score of 0.89. The system enables real-time compliance monitoring and sustainability analytics for enterprise clients.",
    tech: ["Python", "LSTM", "Azure ML", "TensorFlow", "PostgreSQL", "FastAPI"],
    type: "ML",
    highlights: [
      "R² Score: 0.89",
      "Real-time compliance monitoring",
      "Sustainability analytics",
      "Served 50+ organizations",
      "40% improvement in reporting efficiency",
    ],
    link: "#",
    github: "#",
  },
  {
    id: "nl-to-sql",
    title: "Natural Language to SQL Assistant",
    description: "Convert natural language queries to SQL automatically",
    longDescription:
      "Built an intelligent system that converts natural language queries directly to SQL with validation and error handling. Reduced report generation turnaround from hours to minutes, increasing analytics adoption by 40%.",
    tech: ["LangChain", "OpenAI", "LLMs", "PostgreSQL", "Python", "FastAPI"],
    type: "AI",
    highlights: [
      "Natural language to SQL conversion",
      "Automatic query validation",
      "Reports from hours to minutes",
      "40% increase in analytics adoption",
      "Reduced analyst intervention by 60%",
    ],
    link: "#",
    github: "#",
  },
  {
    id: "multi-agent",
    title: "Multi-Agent Enterprise Assistant",
    description: "Autonomous AI agents for complex business processes",
    longDescription:
      "Orchestrated multiple specialized AI agents using CrewAI and LangGraph for query generation, validation, execution, and response synthesis. Improved response accuracy by 30% and reduced analyst intervention by 60%.",
    tech: ["CrewAI", "LangGraph", "OpenAI", "Python", "FastAPI", "PostgreSQL"],
    type: "AI",
    highlights: [
      "Agent orchestration and planning",
      "Query generation and validation",
      "Autonomous execution",
      "30% improvement in accuracy",
      "60% reduction in manual work",
    ],
    link: "#",
    github: "#",
  },
];
