export const personalInfo = {
  name: "Girisha Malni Nagendran",
  title: "Computer Science Engineer | AI Systems, ML & Scalable Computing",
  tagline: "Exploring RAG Architecture, Quantum Machine Learning & ESG Intelligence",
  email: "girishamalnin@gmail.com",
  phone: "+91 7094910824",
  location: "Madurai, India",
  college: "Velammal College of Engineering and Technology",
  cgpa: "8.56 / 10.0",
  github: "https://github.com/Girisha-Malni-builds01",
  linkedin: "https://linkedin.com/in/girisha-malni-n",
  scholar: "https://tinyurl.com/googlescholar-girisha",
  medium: "https://medium.com/@23csec07.ngirishamalni",
  
  traits: [
    "Fast Learner",
    "Collaborative",
    "Passionate Learner",
    "Storyteller",
    "Team Player",
    "Traveller",
    "Researcher"
  ],

  passions: [
    { title: "Carnatic Music", icon: "Music" },
    { title: "Tea Connoisseur", icon: "Coffee" },
    { title: "Travel & Wanderlust", icon: "Compass" },
    { title: "Photography", icon: "Camera" },
    { title: "Storytelling & Writing", icon: "BookOpen" }
  ],

  languages: [
    { name: "Tamil", level: "Native" },
    { name: "English", level: "Fluent / Academic" },
    { name: "Hindi", level: "Conversational" },
    { name: "Kannada", level: "Conversational" },
    { name: "Sanskrit", level: "Basic / Scholarly" },
    { name: "German", level: "Elementary" }
  ],

  images: {
    headshot: "/images/girisha-travel.jpg", // Main coloured picture
    artistic: "/images/girisha-art.jpg",
    bluePortrait: "/images/girisha-blue.jpg"
  }
};

export const experiences = [
  {
    role: "AI Developer",
    company: "DitchCarbon",
    location: "Berlin, Germany",
    period: "Dec 2025 – Jan 2026",
    badge: "International Remote Internship",
    highlights: [
      "Built an advanced Retrieval-Augmented Generation (RAG) pipeline using LlamaIndex for chunking unstructured PDF documents.",
      "Created vector embeddings using OpenAI text-embedding-3-small for high-precision semantic similarity retrieval.",
      "Utilized GPT-4o to process retrieved contexts and extract structured Environmental, Social & Governance (ESG) carbon metrics."
    ],
    skills: ["RAG", "LlamaIndex", "OpenAI API", "GPT-4o", "ESG Metrics", "Vector Embeddings"]
  },
  {
    role: "Undergraduate Research Intern",
    company: "Carleton University",
    location: "Ottawa, Canada",
    period: "Feb 2025 – Jul 2025",
    badge: "International Research Internship",
    highlights: [
      "Developed an end-to-end ESG analytics pipeline utilizing RAG architectures and Qdrant vector database.",
      "Implemented discourse graphs and HyperRAG algorithms for large-scale corporate sustainability report analysis.",
      "Optimized document retrieval latency and contextual accuracy across complex multi-page financial disclosures."
    ],
    skills: ["Qdrant Vector DB", "Discourse Graphs", "HyperRAG", "Python", "ESG Analytics"]
  },
  {
    role: "Summer Outreach Participant",
    company: "ACM India, JUIT",
    location: "Himachal Pradesh, India",
    period: "Jun 2025",
    badge: "ACM Cohort Internship",
    highlights: [
      "Participated in intensive advanced cohorts organized by ACM India Chapter at Jaypee University of Information Technology.",
      "Focused on theoretical computer science, quantum algorithms, variational quantum circuits, and emerging computing architectures."
    ],
    skills: ["Quantum Computing", "Theoretical CS", "Algorithms", "ACM Chapter"]
  },
  {
    role: "Agentic AI Developer",
    company: "Chakril Apps",
    location: "Tamil Nadu, India",
    period: "Apr 2025 – May 2025",
    badge: "Industry AI Internship",
    highlights: [
      "Contributed to digital marketing workflow automation by engineering autonomous Python scripts.",
      "Orchestrated multi-agent crews using CrewAI for search engine optimization (SEO) automation and content strategy generation."
    ],
    skills: ["CrewAI", "Agentic Systems", "Python", "SEO Automation", "LLM Orchestration"]
  }
];

export const education = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "Velammal College of Engineering and Technology",
    location: "Madurai, India",
    period: "2023 – 2027",
    score: "CGPA: 8.56 / 10.0",
    details: "Focusing on AI Systems, Machine Learning, Scalable Computing, and Quantum Computing algorithms."
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    institution: "Oxford Matriculation Higher Secondary School",
    location: "Sivaganga, India",
    period: "2020 – 2022",
    score: "Grade: 93%",
    details: "Specialized in Computer Science, Mathematics, Physics, and Chemistry."
  }
];

export const researchPapers = [
  {
    id: "fllm-2025",
    title: "Enhanced ESG Report Analysis using Multimodal RAG",
    venue: "IEEE FLLM 2025",
    location: "Vienna, Austria",
    status: "Published",
    type: "Conference",
    link: "https://ieeexplore.ieee.org/abstract/document/10986878",
    abstract: "Proposes a novel multimodal Retrieval-Augmented Generation (RAG) framework tailored for parsing heterogenous sustainability reports containing tabular, textual, and visual emissions charts with high fidelity.",
    tags: ["Multimodal RAG", "ESG Intelligence", "IEEE Conference", "LLMs"]
  },
  {
    id: "aide-2025",
    title: "ECOSAUR — Empowering Sustainable Choices",
    venue: "IEEE AIDE 2025",
    location: "Karnataka, India",
    status: "Published",
    type: "Conference",
    link: "https://ieeexplore.ieee.org/abstract/document/11390981/",
    abstract: "Introduces ECOSAUR, an AI-driven framework that enables consumers and institutions to make data-backed eco-friendly purchasing decisions by scoring lifecycle carbon emissions.",
    tags: ["Sustainability", "AI Decision Support", "IEEE AIDE"]
  },
  {
    id: "ncvpripg-2026",
    title: "Scene-Aware Ownership and Intent Breakdown Detection (SOID)",
    venue: "NCVPRIPG 2026 (Springer Proceedings)",
    location: "The LNMIIT, Rajasthan, India",
    status: "Presented",
    type: "Conference",
    link: null,
    abstract: "Presents a computer vision model that analyzes spatial ownership boundaries and intent breakdowns in complex multi-object human interaction scenes.",
    tags: ["Computer Vision", "Intent Detection", "Springer", "Scene Analysis"]
  },
  {
    id: "quancom-2026",
    title: "QFIM-Guided Variational Quantum Prototype Learning for Explainable Classification",
    venue: "QUANCOM 2026 (Springer Proceedings)",
    location: "University of Trento, Italy",
    status: "Accepted",
    type: "Conference",
    link: null,
    abstract: "Leverages Quantum Fisher Information Matrix (QFIM) to guide prototype learning in variational quantum circuits, achieving explainable classification on high-dimensional quantum states.",
    tags: ["Quantum ML", "Qiskit", "Explainable AI", "QUANCOM", "Springer"]
  },
  {
    id: "eaai-2026",
    title: "Rethinking Retrieval: Future Reasoning Value for Knowledge Residency Optimization in Environmental, Social and Governance Intelligence",
    venue: "Elsevier - Engineering Applications of Artificial Intelligence (EAAI)",
    location: "International Journal",
    status: "Under Review",
    type: "Journal",
    link: null,
    abstract: "Presents a reasoning-centric retrieval paradigm that optimizes knowledge residency and vector lookup strategies for large-scale enterprise ESG intelligence applications.",
    tags: ["Elsevier EAAI", "Journal Paper", "Knowledge Residency", "RAG Optimization"]
  }
];

export const projects = [
  {
    title: "ESG Intelligence Platform - Sustainability Document Analyzer",
    period: "Jan 2026 – Mar 2026",
    category: "AI & Full-Stack Systems",
    description: "Built a full-stack platform for ESG document intelligence using graph-based algorithms to model claim–evidence relationships and detect contradictions for corporate sustainability credit scoring.",
    tech: ["LlamaIndex", "Qdrant", "Python", "React", "Graph Neural Networks"],
    highlights: ["Modeled claim-evidence graph relationships", "Automated contradiction detection", "Used by sustainability credit analysts"]
  },
  {
    title: "Periodontal Disease Prediction Web Application",
    period: "Jan 2025 – Mar 2025",
    category: "Healthcare & Machine Learning",
    description: "Developed a multi-class machine learning model trained on 1,500+ clinical patient records, achieving 82% accuracy and a 0.79 weighted F1-score for periodontal disease stage prediction.",
    tech: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Healthcare ML"],
    highlights: ["Deployed as interactive Streamlit application", "Validated through feedback from 3 collaborating dental clinics", "Achieved 0.79 F1-score on clinical dataset"]
  }
];

export const honorsAndHackathons = [
  {
    title: "ACM KARE HackOdyssey 3.0",
    award: "Special Prize (4th Place / 90 Teams)",
    year: "Mar 2026",
    org: "ACM Student Chapter, KARE",
    desc: "Engineered an AI agent prototype for autonomous environmental compliance within 36 hackathon hours."
  },
  {
    title: "Best Paper Award - CurvOpt-LLM",
    award: "First Prize Best Paper",
    year: "Mar 2026",
    org: "Paradigm 2026, Thiagarajar College of Engineering (TCE)",
    desc: "Awarded Best Paper for curvature-optimized LLM quantization and prompt retrieval optimization."
  },
  {
    title: "ACM India Industry Day - Research Poster Winner",
    award: "First Prize Winner",
    year: "2025",
    org: "ACM India National Chapter",
    desc: "Won 1st Place in the national poster presentation for innovative RAG architectures in sustainability."
  },
  {
    title: "Amazon ML Challenge 2025",
    award: "AIR 1747 / 23,000 Teams (Top 7.6%)",
    year: "Oct 2025",
    org: "Amazon India",
    desc: "Ranked in top percentile nationally out of 23,000 participating student developer teams."
  },
  {
    title: "State Hackathon Runner-up",
    award: "Second Prize",
    year: "2025",
    org: "Thiagarajar College of Engineering, Madurai",
    desc: "Built a real-time web application for automated ESG benchmarking."
  },
  {
    title: "TATA Building India Medal",
    award: "Gold Medalist",
    year: "2020",
    org: "TATA Group",
    desc: "National level recognition for essay writing and youth leadership."
  },
  {
    title: "INSPIRE MANAK Fellowship",
    award: "National Fellowship",
    year: "2019 – 2020",
    org: "Department of Science & Technology (DST), Govt of India",
    desc: "Prestigious DST fellowship awarded for early scientific innovation project."
  }
];

export const mediumBlogs = [
  {
    id: "blog-1",
    title: "White Nights and Brief Connections: The Loneliness That Remains When the Closest People Become Strangers Again",
    snippet: "In ILLUMINATION by Girisha Malni N",
    url: "https://medium.com/illumination/white-nights-and-brief-connections-86ad6cd647e1",
    date: "Jun 24",
    readTime: "8 min read",
    thumbnail: "/images/blog_carnatic.png",
    tags: ["ILLUMINATION", "Essay", "Relationships", "Writing"]
  },
  {
    id: "blog-2",
    title: "Oaths, Ideas and Inventions: India’s Journey to True Freedom",
    snippet: "Written by Girisha Malni N",
    url: "https://medium.com/@23csec07.ngirishamalni/oaths-ideas-and-inventions-indias-journey-to-true-freedom-7feff9673f91",
    date: "Aug 15, 2025",
    readTime: "5 min read",
    thumbnail: "/images/tea_vibes.png",
    tags: ["History", "Invention", "Freedom", "Essays"]
  },
  {
    id: "blog-3",
    title: "The Existentialism of June: A Month Between Motion and Meaning",
    snippet: "Written by Girisha Malni N",
    url: "https://medium.com/@23csec07.ngirishamalni/the-existentialism-of-june-4b31927b1045",
    date: "Jun 1",
    readTime: "4 min read",
    thumbnail: "/images/travel_landscape.png",
    tags: ["Mindset", "Reflections", "Existentialism", "June"]
  },
  {
    id: "blog-4",
    title: "The Art of Zoning Out: What Travelling Taught Me About Staring at Stillness",
    snippet: "Written by Girisha Malni N",
    url: "https://medium.com/@23csec07.ngirishamalni/the-art-of-zoning-out-6cf5e322a191",
    date: "4d ago",
    readTime: "5 min read",
    thumbnail: "/images/blog_rag.png",
    tags: ["Travel", "Stillness", "Mindfulness", "Stories"]
  }
];

export const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online & DeepLearning.AI (Coursera)",
    date: "2024",
    verifyUrl: "https://coursera.org",
    badgeColor: "from-blue-600 to-indigo-600",
    details: "Supervised ML, Neural Networks, Decision Trees, and Unsupervised Learning techniques taught by Andrew Ng."
  },
  {
    title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
    issuer: "IBM (Coursera)",
    date: "2024",
    verifyUrl: "https://coursera.org",
    badgeColor: "from-cyan-600 to-blue-700",
    details: "Building production data engineering pipelines using Apache Airflow, Kafka streaming, and bash scripting."
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute (DLI)",
    date: "2024",
    verifyUrl: "https://nvidia.com",
    badgeColor: "from-green-600 to-emerald-700",
    details: "Computer Vision & NLP neural network architectures, PyTorch acceleration, and GPU optimization."
  },
  {
    title: "AI for Image Processing & Computer Vision Workshop",
    issuer: "Thiagarajar College of Engineering (TCE), Madurai",
    date: "2025",
    verifyUrl: "#",
    badgeColor: "from-purple-600 to-pink-600",
    details: "Hands-on workshop on OpenCV, scene breakdown, object segmentation, and modern vision transformers."
  }
];

export const skillsList = {
  programming: ["Python", "Java", "SQL", "JavaScript", "C/C++"],
  aiSystems: ["RAG Pipelines", "LlamaIndex", "LangChain", "CrewAI", "Qdrant", "FAISS", "HuggingFace", "PyTorch", "Transformers", "Streamlit", "Flask"],
  quantum: ["Qiskit", "Quantum Error Correction", "Variational Quantum Algorithms (VQA)", "QML"],
  databasesTools: ["MongoDB", "MySQL", "Git & GitHub", "MATLAB", "Linux", "Airflow", "Kafka"]
};

export const leadershipAndService = [
  {
    role: "Placement Batch Head",
    organization: "Velammal College of Engineering & Technology",
    period: "2025 – Present",
    desc: "Coordinating placement activities, training sessions, and corporate relations for 180+ engineering students."
  },
  {
    role: "President, ECO Club",
    organization: "Velammal College of Engineering & Technology",
    period: "2025 – Present",
    desc: "Leading sustainability drives, campus energy conservation projects, and environmental awareness workshops."
  },
  {
    role: "Webmaster, ACM Student Chapter",
    organization: "Velammal College of Engineering & Technology",
    period: "2025 – Present",
    desc: "Managing chapter web platform, organizing hackathons, technical workshops, and coding challenges."
  }
];
