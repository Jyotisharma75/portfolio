import { Skill } from "@/lib/types";

export const skills: Skill[] = [
  {
    id: "generative-ai",
    category: "Generative AI & LLMs",
    skills: [
      { name: "LLM Applications", proficiency: 95 },
      { name: "Prompt Engineering", proficiency: 90 },
      { name: "RAG (Retrieval Augmented Generation)", proficiency: 90 },
      { name: "Agentic AI", proficiency: 90 },
      { name: "LangChain", proficiency: 95 },
      { name: "Azure OpenAI", proficiency: 95 },
      { name: "Vector Databases (FAISS, Pinecone)", proficiency: 85 },
      { name: "CrewAI & LangGraph", proficiency: 85 },
    ],
  },
  {
    id: "machine-learning",
    category: "Machine Learning & NLP",
    skills: [
      { name: "NLP", proficiency: 90 },
      { name: "LSTM & Time-Series", proficiency: 85 },
      { name: "Scikit-learn", proficiency: 90 },
      { name: "Feature Engineering", proficiency: 85 },
      { name: "Model Evaluation & Optimization", proficiency: 85 },
      { name: "Deep Learning", proficiency: 80 },
      { name: "TensorFlow", proficiency: 80 },
    ],
  },
  {
    id: "backend",
    category: "Backend Development",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "FastAPI", proficiency: 90 },
      { name: "REST APIs", proficiency: 90 },
      { name: "GraphQL", proficiency: 75 },
      { name: "API Design & Development", proficiency: 90 },
      { name: "Software Architecture", proficiency: 85 },
    ],
  },
  {
    id: "cloud",
    category: "Cloud & DevOps",
    skills: [
      { name: "Azure", proficiency: 90 },
      { name: "AWS", proficiency: 75 },
      { name: "Azure OpenAI Service", proficiency: 90 },
      { name: "Cloud Architecture", proficiency: 85 },
      { name: "Containerization", proficiency: 80 },
    ],
  },
  {
    id: "databases",
    category: "Databases & Data",
    skills: [
      { name: "PostgreSQL", proficiency: 90 },
      { name: "MySQL", proficiency: 85 },
      { name: "Vector Databases", proficiency: 85 },
      { name: "Data Pipelines", proficiency: 85 },
      { name: "SQL Optimization", proficiency: 90 },
    ],
  },
];
