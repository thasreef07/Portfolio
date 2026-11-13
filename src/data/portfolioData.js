export const personalInfo = {
  name: "Muhammad Thashreef",
  title: "AI & Machine Learning Engineer",
  tagline: "Architecting Intelligent Systems, Prompt-Driven AutoML & Computer Vision Pipelines",
  location: "Mangaluru, Karnataka, India",
  coordinates: "12.9141° N, 74.8560° E",
  email: "muhammadthasreef65@gmail.com",
  phone: "+91 78992 90857",
  github: "https://github.com/thasreef07",
  githubHandle: "thasreef07",
  linkedin: "https://linkedin.com/in/muhammad-thashreef-53850a292",
  linkedinHandle: "muhammad-thashreef-53850a292",
  summary: "Artificial Intelligence and Machine Learning Engineering student with a strong foundation in Python, machine learning, and problem-solving. Passionate about building AI-driven solutions and continuously learning new technologies to solve real-world challenges.",
  stats: [
    { label: "ML Algorithms Implemented", value: "8+", subtext: "Automated pipelines" },
    { label: "Extraction Accuracy", value: "99.2%", subtext: "DocTR + Gemini OCR" },
    { label: "Inference Latency", value: "<400ms", subtext: "Groq Llama 3.3 API" },
    { label: "Degree Timeline", value: "2023–2027", subtext: "B.E. AIML Candidate" }
  ]
};

export const skillsCategories = [
  {
    title: "AI & Machine Learning",
    badge: "Core Expertise",
    color: "#6DFF9B",
    skills: [
      { name: "Machine Learning", level: 92, desc: "Supervised & Unsupervised Algorithms, Ensembles" },
      { name: "Scikit-Learn & Optuna", level: 90, desc: "Bayesian Optimization, 5-Fold Cross-Validation" },
      { name: "Generative AI & LLMs", level: 88, desc: "Google Gemini AI, Groq Llama 3.3, Prompt Design" },
      { name: "Pandas & NumPy", level: 95, desc: "High-performance data manipulation & vectorization" },
      { name: "Document Intelligence", level: 90, desc: "DocTR OCR, PyMuPDF, Computer Vision pipelines" }
    ]
  },
  {
    title: "Programming Languages",
    badge: "Polyglot",
    color: "#00D9FF",
    skills: [
      { name: "Python", level: 96, desc: "Primary language for ML, scripting & backend" },
      { name: "C", level: 80, desc: "Systems programming, low-level memory & pointers" },
      { name: "SQL", level: 85, desc: "Complex queries, indexing, schema design" },
      { name: "R & Julia", level: 78, desc: "Statistical computing & mathematical modeling" }
    ]
  },
  {
    title: "Full-Stack & Systems",
    badge: "Infrastructure",
    color: "#6DFF9B",
    skills: [
      { name: "FastAPI & Flask", level: 88, desc: "REST APIs, Server-Sent Events (SSE), asynchronous workers" },
      { name: "React & Vite", level: 84, desc: "Modern component architecture, reactive state, UI design" },
      { name: "Tailwind CSS", level: 90, desc: "Glassmorphism, custom design systems, responsive UI" },
      { name: "MySQL & MongoDB", level: 85, desc: "Relational modeling, NoSQL CRUD, aggregation, indexing" }
    ]
  },
  {
    title: "Engineering Fundamentals",
    badge: "CS Foundations",
    color: "#00D9FF",
    skills: [
      { name: "Data Structures & Algorithms", level: 86, desc: "Trees, graphs, dynamic programming, algorithmic complexity" },
      { name: "OOP & System Design", level: 88, desc: "Modular architecture, clean code, design patterns" },
      { name: "DBMS & Operating Systems", level: 85, desc: "Process concurrency, memory management, transactions" },
      { name: "DevOps & Version Control", level: 90, desc: "Git (IIT Bombay certified), GitHub, CI/CD workflows" }
    ]
  }
];

export const projects = [
  {
    id: "convert-ai",
    title: "Convert.ai – AI-Powered VTU Result Analyzer",
    subtitle: "High-Accuracy Multimodal OCR Document Extraction Engine",
    date: "Aug 2025 – Dec 2025",
    github: "https://github.com/thasreef07",
    category: "Computer Vision & OCR",
    featured: true,
    badge: "PRODUCTION GRADE",
    color: "#6DFF9B",
    tags: ["Python", "Flask", "DocTR OCR", "Google Gemini AI", "Regex", "PyMuPDF", "OpenPyXL"],
    description: "An end-to-end document processing pipeline that automates the extraction and validation of academic results from complex scanned PDFs and images, eliminating manual entry with 99.2% structured accuracy.",
    visualType: "ocr-pipeline",
    metrics: [
      { label: "Accuracy", value: "99.2%" },
      { label: "Time Saved", value: "15x" },
      { label: "Batch Capacity", value: "50+ sheets/min" }
    ],
    highlights: [
      "Built an end-to-end document processing pipeline including PDF-to-image conversion, image pre-processing, OCR, intelligent text parsing, and structured Excel report generation.",
      "Engineered a hybrid parser integrating DocTR OCR with Google Gemini Vision fallback to handle noisy scans, skewed orientations, and varying table borders.",
      "Designed a responsive Flask interface supporting single and batch uploads, reducing manual administrative processing time from hours to seconds.",
      "Implemented automated regex-driven validation to structure student USN, subject codes, internal/external marks, and pass/fail classifications into clean Excel sheets."
    ],
    caseStudy: {
      problem: "University examination scorecards and semester results (VTU) are distributed as non-searchable scanned PDFs or photos with erratic contrast, varied rotations, and misaligned cell borders. Manual transposition is painfully slow and prone to human error.",
      solution: "Architected Convert.ai: a multi-stage document intelligence pipeline. Incoming files are ingested via Flask, rendered into high-DPI buffers via PyMuPDF, enhanced with adaptive contrast and deskewing, and routed to DocTR deep-learning OCR. Ambiguous or degraded text regions trigger Google Gemini AI multimodal analysis.",
      architecture: [
        { step: "01. Ingestion", detail: "Flask endpoint accepts single or batch PDF/image archives with MIME-type verification." },
        { step: "02. Pre-processing", detail: "PyMuPDF vector rasterization, grayscale normalization, and threshold enhancement." },
        { step: "03. Hybrid Extraction", detail: "DocTR OCR predicts bounding boxes; Google Gemini AI resolves complex tabular inconsistencies." },
        { step: "04. Validation & Export", detail: "Regex validator confirms USN format and grading rules, outputting polished Excel reports via OpenPyXL." }
      ],
      impact: "Eliminated over 90% of manual transcription labor for academic faculty, achieving near-perfect schema compliance across diverse college batches."
    }
  },
  {
    id: "automl-studio",
    title: "AutoML Studio – Prompt-Driven AutoML Platform",
    subtitle: "Conversational Machine Learning Engine with Bayesian Optimization",
    date: "Aug 2026 – Dec 2026",
    github: "https://github.com/thasreef07",
    category: "Automated ML & Systems",
    featured: true,
    badge: "ADVANCED ARCHITECTURE",
    color: "#00D9FF",
    tags: ["Python", "FastAPI", "Scikit-Learn", "Optuna", "React", "Vite", "Tailwind CSS", "SSE"],
    description: "A prompt-driven AutoML platform that autonomously handles data preprocessing, model selection across 8 algorithms, 5-fold cross-validation, and Optuna Bayesian optimization via real-time SSE streaming.",
    visualType: "automl-pipeline",
    metrics: [
      { label: "Algorithms", value: "8 Models" },
      { label: "Validation", value: "5-Fold CV" },
      { label: "Streaming", value: "Real-Time SSE" }
    ],
    highlights: [
      "Developed a conversational AutoML system automating machine learning workflows from raw CSV/JSON uploads to production-ready weights without writing boilerplate code.",
      "Engineered automated Exploratory Data Analysis (EDA) pipelines performing missing value imputation, categorical encoding, feature scaling, and heuristic target suggestions.",
      "Implemented 8 machine learning algorithms (Random Forest, XGBoost, LightGBM, Gradient Boosting, SVM, Logistic Regression, KNN, Extra Trees) with Optuna Bayesian tuning.",
      "Constructed a high-concurrency FastAPI backend with Server-Sent Events (SSE) streaming live trial logs to a modern React chat interface, producing self-contained HTML reports."
    ],
    caseStudy: {
      problem: "Data scientists and domain experts waste countless hours writing repetitive boilerplate for EDA, data cleaning, baseline benchmarking, and parameter sweeps before discovering which architecture fits a tabular dataset.",
      solution: "Created AutoML Studio: users converse in natural language, upload datasets, and the engine automatically detects task type (classification/regression), engineers features, and runs parallel Bayesian hyperparameter sweeps via Optuna with 5-fold cross-validation.",
      architecture: [
        { step: "01. Data Ingestion & EDA", detail: "Automated pandas/numpy profiling, distribution checks, missing-value imputation & encoding." },
        { step: "02. Prompt & Task Classifier", detail: "Parses user instructions to identify optimization objectives (AUC, F1, Accuracy, RMSE)." },
        { step: "03. Bayesian Tuning Engine", detail: "Optuna guides model search across 8 candidate architectures with pruning for slow trials." },
        { step: "04. SSE Telemetry & Artifacts", detail: "Streams live epoch/trial logs over SSE; compiles serialized joblib models and standalone HTML reports." }
      ],
      impact: "Reduced tabular model exploration from days to under 5 minutes, providing clear explainability metrics and exportable deployment artifacts."
    }
  },
  {
    id: "jarvis-assistant",
    title: "Jarvis – AI-Powered Voice Assistant",
    subtitle: "Low-Latency Context-Aware Voice Agent & Desktop Automation",
    date: "June 2026 – July 2026",
    github: "https://github.com/thasreef07",
    category: "Autonomous Agents",
    featured: true,
    badge: "ULTRA LOW LATENCY",
    color: "#6DFF9B",
    tags: ["Python", "SpeechRecognition", "Groq API (Llama 3.3)", "pyttsx3", "pyautogui", "Webbrowser"],
    description: "An intelligent voice assistant combining natural speech recognition with Groq-accelerated Llama 3.3 inference to execute desktop tasks, automate operating system actions, and answer real-time queries.",
    visualType: "voice-agent",
    metrics: [
      { label: "Latency", value: "<400ms" },
      { label: "LLM Model", value: "Llama 3.3" },
      { label: "Interface", value: "Speech + GUI" }
    ],
    highlights: [
      "Engineered a sub-second voice assistant by coupling Python's SpeechRecognition with Groq's LPU-accelerated Llama 3.3 inference API.",
      "Built contextual conversation memory enabling multi-turn dialogues, clarifying questions, and progressive tool invocation.",
      "Integrated desktop automation tools via pyautogui and system APIs to control media, manage windows, search documentation, and launch applications through voice.",
      "Architected with modular extensible handlers, allowing easy addition of custom skill plugins (weather, calendar, code execution, web search)."
    ],
    caseStudy: {
      problem: "Traditional local voice assistants either suffer from rigid intent matching or intolerable inference lag when chained to large cloud language models, breaking natural conversational cadence.",
      solution: "Engineered Jarvis to leverage Groq's high-throughput LPU inference running Llama 3.3, delivering instant verbal responses through an asynchronous speech loop while safely executing system-level actions.",
      architecture: [
        { step: "01. Voice Capture", detail: "Continuous background microphone listener with adaptive ambient noise calibration." },
        { step: "02. Fast Speech-to-Text", detail: "Transcribes audio packets with dynamic thresholding to minimize false activations." },
        { step: "03. Groq Llama 3.3 Reasoning", detail: "Streaming LLM outputs determine whether query requires conversational dialogue or system commands." },
        { step: "04. Modular Execution", detail: "Dispatches commands to desktop automation handlers or speaks response via pyttsx3 voice engine." }
      ],
      impact: "Created a truly responsive hands-free coding and productivity companion with near-human conversational turnaround."
    }
  },
  {
    id: "nlp-sentiment-engine",
    title: "Neural NLP & Text Analytics Sandbox",
    subtitle: "Advanced Text Preprocessing & Semantic Analytics Framework",
    date: "2026",
    github: "https://github.com/thasreef07",
    category: "Natural Language Processing",
    featured: false,
    badge: "RESEARCH & EXPERIMENTAL",
    color: "#00D9FF",
    tags: ["Python", "NLP", "Scikit-Learn", "MongoDB", "Tokenization", "Text Mining"],
    description: "A comprehensive Natural Language Processing framework built to benchmark tokenization techniques, stop-word reduction, TF-IDF vectorization, and sentiment polarity classification with MongoDB persistent storage.",
    visualType: "nlp-network",
    metrics: [
      { label: "Pipeline Speed", value: "10k docs/s" },
      { label: "Database", value: "MongoDB" },
      { label: "Cert. Backing", value: "Simplilearn" }
    ],
    highlights: [
      "Implemented customizable text sanitization, lemmatization, N-gram generators, and TF-IDF matrix transformations.",
      "Integrated MongoDB aggregation pipelines for indexing high-volume textual datasets and metadata indexing.",
      "Designed an interactive evaluation dashboard visualizing vocabulary frequencies and semantic clusters."
    ],
    caseStudy: {
      problem: "Unstructured text corpora require modular and reproducible preprocessing pipelines before feeding downstream neural or classical models.",
      solution: "Constructed an end-to-end NLP workbench covering foundational and advanced text processing protocols certified through Simplilearn's NLP curriculum.",
      architecture: [
        { step: "01. Tokenization", detail: "Sub-word and regex-based token streams with POS tagging." },
        { step: "02. Vectorization", detail: "Sparse matrix transformation via TF-IDF and word embedding projections." },
        { step: "03. Classification", detail: "Ensemble classifiers for intent classification and sentiment scoring." }
      ],
      impact: "Provided reusable text engineering modules integrated into Convert.ai's regex-parsing stage."
    }
  }
];

export const education = {
  degree: "B.E. in Artificial Intelligence & Machine Learning",
  institution: "Yenepoya Institute of Technology",
  location: "Thodar Moodbidri, Mangaluru, Karnataka",
  period: "2023 – 2027",
  status: "In Progress (3rd Year)",
  coursework: [
    "Design and Analysis of Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems & Systems Programming",
    "Machine Learning & Mathematical Foundations",
    "Data Structures in C & Python"
  ]
};

export const certifications = [
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB University",
    date: "Certified",
    focus: "NoSQL Database Architecture",
    description: "MongoDB NoSQL databases, CRUD operations, Aggregation Pipelines, and Indexing performance optimization.",
    tags: ["MongoDB", "NoSQL", "Aggregation", "Indexing"],
    color: "#6DFF9B"
  },
  {
    title: "Git Training Certification",
    issuer: "IIT Bombay",
    date: "Certified",
    focus: "Version Control & Systems Collaboration",
    description: "Advanced Git workflows, branching strategies, conflict resolution, rebase operations, and collaborative repository management.",
    tags: ["Git", "GitHub", "VCS", "Collaboration"],
    color: "#00D9FF"
  },
  {
    title: "Natural Language Processing (NLP)",
    issuer: "Simplilearn",
    date: "Certified",
    focus: "Text Analytics & Language Models",
    description: "Text preprocessing, tokenization, lemmatization, sentiment analysis, TF-IDF, and NLP fundamentals.",
    tags: ["NLP", "Text Processing", "Tokenization", "ML"],
    color: "#6DFF9B"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn",
    date: "Certified",
    focus: "Foundational AI & Heuristic Search",
    description: "Foundational knowledge of AI concepts, machine learning workflows, problem-solving techniques, and real-world AI applications.",
    tags: ["AI", "Machine Learning", "Heuristics", "Search Algorithms"],
    color: "#00D9FF"
  }
];

export const terminalCommands = {
  help: `Available commands:
  • whoami       : Display profile summary & core engineering mission
  • projects     : List all flagship AI & ML systems
  • skills       : Inspect technical skills & tech stack
  • convert-ai   : Inspect VTU Result Analyzer pipeline specs
  • automl       : Inspect AutoML Studio architecture
  • jarvis       : Inspect Jarvis Voice Assistant specs
  • edu          : Display academic background & certifications
  • contact      : View contact coordinates & direct channels
  • clear        : Clear console output`,
  whoami: `MUHAMMAD THASHREEF
AI & Machine Learning Engineering Student | Yenepoya Institute of Technology (2023-2027)
Location: Mangaluru, Karnataka, India
Specialization: Prompt-Driven AutoML, Document Intelligence / OCR, Low-Latency Agentic Systems.`,
  projects: `FLAGSHIP PROJECTS:
1. Convert.ai     [DocTR OCR + Gemini AI] -> 99.2% VTU Result Extraction
2. AutoML Studio  [FastAPI + Optuna + SSE] -> 8 ML Algos + Bayesian Tuning
3. Jarvis Voice   [Groq API + Llama 3.3]  -> Sub-400ms Voice Agent
Type 'convert-ai', 'automl', or 'jarvis' for system breakdowns.`,
  skills: `LANGUAGES   : Python, C, SQL, R, Julia
AI & ML     : Scikit-learn, Optuna, Gemini AI, Llama 3.3, NumPy, Pandas, DocTR
DATABASES   : MySQL, MongoDB (Certified)
CORE CS     : DSA, OOP, DBMS, Operating Systems
TOOLS       : Git (IIT Bombay), VS Code, Linux, Jupyter, FastAPI, Flask, React`,
  "convert-ai": `[CONVERT.AI SYSTEM ARCHITECTURE]
Input: Scanned VTU marksheets (PDF/Image)
Pipeline: PyMuPDF Rasterization -> Adaptive Contrast -> DocTR OCR -> Gemini Vision Fallback -> Regex Parser
Output: Structured Excel (OpenPyXL) with 99.2% accuracy. Batch throughput: 50+ docs/min.`,
  automl: `[AUTOML STUDIO ARCHITECTURE]
Input: CSV / JSON Dataset + User Prompt
Engine: Heuristic EDA -> Missing Value Imputer -> Feature Encoder -> Optuna Bayesian Optimization
Models: 8 Algos (XGBoost, LightGBM, RF, SVM, etc.) with 5-Fold Cross-Validation
Output: Real-time SSE streaming logs + Compiled Model Weights + Standalone HTML Reports.`,
  jarvis: `[JARVIS VOICE ASSISTANT]
Input: Real-time Audio Stream (SpeechRecognition)
Reasoning: Groq LPU API running Llama 3.3 (<400ms time-to-first-token)
Action Handlers: OS App Launcher, System Volume/Media, Web Search, Contextual Multi-turn Memory.`,
  edu: `EDUCATION:
B.E. in Artificial Intelligence & Machine Learning (2023–2027)
Yenepoya Institute of Technology, Mangaluru

CERTIFICATIONS:
✓ MongoDB NoSQL Databases & Aggregation (MongoDB University)
✓ Git Version Control & Workflows (IIT Bombay)
✓ Natural Language Processing (Simplilearn)
✓ Introduction to Artificial Intelligence (Simplilearn)`,
  contact: `CONNECT WITH THASHREEF:
Email    : muhammadthasreef65@gmail.com
Phone    : +91 78992 90857
GitHub   : https://github.com/thasreef07
LinkedIn : https://linkedin.com/in/muhammad-thashreef-53850a292
Location : Mangaluru, Karnataka, India`
};
