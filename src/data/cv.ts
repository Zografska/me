// Everything on the site comes from this file. Edit here, not in the markup.

export const person = {
  name: ['Aleksandra', 'Zografska'],
  title: 'Lead Developer',
  subtitle: 'Full-stack and AI-assisted development',
  location: 'Milan, Italy',
  email: 'aleksndra2@gmail.com', // double-check this spelling before going live
  github: 'https://github.com/Zografska',
  githubHandle: 'Zografska',
  cv: '/Aleksandra_Zografska_CV.pdf', // drop the PDF into /public with this name
  coreStack: ['Python', 'TypeScript', 'C#', 'React', 'FastAPI', '.NET', 'Docker', 'Claude Code'],
};

export const profile = `Generalist software engineer with 5+ years of experience shipping web, mobile, backend and LLM-powered products across Python, TypeScript and C#. I've moved between stacks, domains and roles, from sole developer on a frontend migration to Tech Lead owning architecture and delivery, and I rely on solid engineering fundamentals to ramp up fast on whatever a project needs. AI-assisted development is part of how I work every day: I design the Claude Code workflows, skills and prompts my team develops with, keeping a human in the loop at every step. I've also built LLM systems on self-hosted models where data privacy rules out third-party APIs. Mentor to junior engineers and author of technical hiring assessments. Currently completing an MSc in Data Science for Economics at the University of Milan.`;

// Technologies drawn in pink (AI / LLM). Everything else is blue.
export const aiTech = new Set([
  'Claude Code', 'Ollama', 'Llama 3.2', 'DeepSeek', 'Hugging Face', 'sentence-transformers',
  'Cursor', 'Prompt engineering', 'Agent skills', 'MCP (FastMCP, Chrome MCP)', 'OpenAI Agents SDK',
  'LangChain', 'CrewAI', 'RAG', 'ChromaDB', 'LLM evaluation (golden sets, Hit@k)',
]);

export const aiLoop = [
  { title: 'Rules first', text: 'A CLAUDE.md hierarchy encodes API rules, frontend conventions and domain knowledge, so the agent and new joiners work to the project’s standards from the first prompt.' },
  { title: 'Skill picks up the task', text: 'Reusable debug and feature skills give every task the same starting shape.' },
  { title: 'Reproduce in the browser', text: 'Wired to the Chrome MCP, the agent reproduces the bug or exercises the feature in a real browser.' },
  { title: 'Implement', text: 'The change is made against the encoded conventions: scaffolding, refactoring, tests, docs.' },
  { title: 'Re-validate', text: 'The agent goes back to the browser and checks the fix before anything reaches review.' },
  { title: 'Human review', text: 'A person reviews every step. The agent proposes; the engineer decides.' },
];

export const aiExtras = [
  { title: 'Log triage', text: 'A check-logs prompt pulls container logs from dev, staging and production through Dozzle for fast incident triage.' },
  { title: 'Shared, not hoarded', text: 'Skills and prompts are shared with the team as reusable assets, not kept as personal shortcuts.' },
  { title: 'Local models in production', text: 'Production LLM systems on Ollama and open-weight models, with structured-output validation and human-validated golden sets.' },
];

export type Project = {
  id: string;
  name: string;
  role: string;
  summary: string;
  bullets: string[];
  stack: string[];
  skills: string[]; // canonical names, matched against the skills sticker sheet
  selfHosted?: boolean;
  migration?: { from: string; to: string };
};

export const employer = {
  title: 'Software Engineer',
  company: 'CodeChem Inc.',
  place: 'Skopje, North Macedonia',
  dates: 'May 2021 – present',
};

export const projects: Project[] = [
  {
    id: 'game-center',
    name: 'Game Center',
    role: 'Tech Lead, mobile games hub',
    summary: 'A games hub combining game management, player challenges and tournament organisation, with an analytics layer showing players their standings, form and head-to-head comparisons.',
    bullets: [
      'Tech Lead and the one constant engineer on an internal product: own the architecture, planning and delivery, and work hands-on across the .NET services and the React client while onboarding a rotating team of 1–4 engineers.',
      'Designed a microservice architecture so game management, the challenge engine and tournament logic can be developed, deployed and scaled independently.',
      'Moved latency-sensitive paths (live rankings and standings) onto Redis so they don’t hit the primary store on every request.',
      'Centralised secrets and environment configuration in Infisical, keeping credentials out of the repository and consistent across environments.',
      'Built the project’s Claude Code workflow (CLAUDE.md rules, debug and feature skills, Chrome MCP validation, log triage), which lets rotating team members become productive quickly.',
    ],
    stack: ['.NET', 'C#', 'React', 'Redis', 'Docker', 'Infisical', 'Grafana', 'Firebase Analytics', 'Google Analytics', 'Claude Code'],
    skills: ['C#', '.NET Core / .NET Framework', 'React', 'Redis', 'Docker', 'Infisical', 'Grafana', 'Firebase Analytics', 'Google Analytics', 'Claude Code', 'Agent skills', 'MCP (FastMCP, Chrome MCP)', 'Prompt engineering', 'Dozzle', 'Microservices'],
  },
  {
    id: 'syntea',
    name: 'Syntea Learn',
    role: 'AI-driven conversational learning platform, for IU Internationale Hochschule',
    summary: 'Built the MVP from scratch in a team of 5 engineers, a Product Owner and a designer, as a Python/TypeScript monorepo combining a web chat UI, an LLM agent layer and backend services for profiles, courses and goals.',
    bullets: [
      'Developed the LLM-powered agents and the prompting logic that orchestrates model calls across the conversational, profile and course workflows.',
      'Built major parts of the React + Vite chat UI, including core components, state management and the API integrations connecting the interface to the agent layer.',
      'Integrated frontend features with FastAPI endpoints and contributed to the shared Python services in the monorepo.',
      'Kept the monorepo green through automated testing, type checking and linting, in a Docker Compose environment with AWS services and GitHub Actions CI.',
      'Took part in MVP product meetings, contributing to feature scoping, UX decisions and prioritisation.',
    ],
    stack: ['Python', 'FastAPI', 'TypeScript', 'React', 'Vite', 'Docker Compose', 'AWS', 'GitHub Actions'],
    skills: ['Python', 'FastAPI', 'TypeScript', 'React', 'Vite', 'Docker Compose', 'AWS', 'GitHub Actions', 'Prompt engineering'],
  },
  {
    id: 'linksync',
    name: 'Linksync',
    role: 'LLM-assisted candidate profile extraction, internal tool',
    summary: 'Designed and built end to end, on my own.',
    bullets: [
      'Built a Chrome extension that reads candidate profiles in the browser and uses a small LLM to extract them into structured records, written straight into CodeChem’s recruitment systems. This removed manual re-keying and the transcription errors it caused.',
      'Served the model locally through Ollama: candidate profiles are personal data, so inference never leaves company infrastructure. This also eliminated per-token costs and rate limits for daily use.',
      'Tuned the prompting and extraction logic so a small local model reliably produces parseable structured output, with validation that catches malformed responses before they reach internal systems.',
    ],
    stack: ['Python', 'Ollama', 'JavaScript', 'htmx', 'Chrome Extension APIs'],
    skills: ['Python', 'Ollama', 'JavaScript', 'htmx', 'Chrome Extension APIs', 'Prompt engineering'],
    selfHosted: true,
  },
  {
    id: 'tenforce',
    name: 'TenForce Platform',
    role: 'Semantic modelling platform, for TenForce',
    summary: 'A highly configurable semantic platform for modelling complex systems and their processes, with online and offline operation, used by thousands of users across many customer environments and teams.',
    migration: { from: 'server-rendered ASP.NET', to: 'client-side React + Redux' },
    bullets: [
      'Sole developer on the frontend migration from server-rendered ASP.NET to client-side React + Redux. I proposed the approach and implemented it under the frontend/mobile lead, reworking how the client consumes and holds platform data.',
      'Built a cross-platform mobile app in Xamarin Forms, plus the .NET Framework endpoints serving it, extending the platform to offline field use with background job synchronisation.',
      'Implemented customer-specific business processes by modelling each customer’s domain in the platform’s own entity and relationship structures.',
      'Shipped every feature with automated tests and written manual test scenarios, and worked across teams to keep integrations stable while the client architecture changed.',
    ],
    stack: ['C#', '.NET Core', '.NET Framework', 'ASP.NET', 'React', 'Redux', 'JavaScript', 'Xamarin Forms'],
    skills: ['C#', '.NET Core / .NET Framework', 'ASP.NET', 'React', 'Redux', 'JavaScript'],
  },
];

export const research = {
  id: 'thesis',
  title: 'AI and Web Scraping for Policy Evaluation of the EU Unfair Commercial Practices Directive in Italy',
  kind: 'MSc thesis, University of Milan',
  status: 'Expected January 2027',
  pipeline: [
    { step: 'Scrape', text: 'Italian retailer advertising, at scale' },
    { step: 'Extract', text: 'Environmental, health and composition claims with self-hosted LLMs' },
    { step: 'Retrieve and rerank', text: 'Hybrid retrieval with embedding mean-centering and CSLS hub correction' },
    { step: 'Ground', text: 'Each claim matched to the provision it may violate: UCPD, ECGT, NHCR' },
    { step: 'Benchmark', text: 'Stratified, human-validated golden set; extraction accuracy and Hit@k' },
  ],
  bullets: [
    'Building an end-to-end pipeline that scrapes Italian retailer advertising at scale and uses self-hosted open-weight LLMs to extract environmental, health and composition claims.',
    'Grounding each claim in the legal provision it may violate (UCPD, ECGT green-claims amendments, Nutrition & Health Claims Regulation) via a hybrid retrieval-and-rerank architecture.',
    'Running entirely on self-hosted infrastructure on an NVIDIA A100 HPC cluster (Slurm), for reproducibility and full data sovereignty, unlike most work in this area, which uses English corpora and closed APIs.',
    'Benchmarking extraction accuracy and retrieval Hit@k across model families and prompt configurations against a stratified, human-validated golden set.',
  ],
  stack: ['Python', 'Ollama', 'Llama 3.2', 'DeepSeek', 'Hugging Face', 'sentence-transformers', 'BeautifulSoup', 'Slurm', 'CUDA'],
  skills: ['Python', 'Ollama', 'Hugging Face', 'sentence-transformers', 'BeautifulSoup', 'Slurm / HPC', 'CUDA', 'RAG', 'LLM evaluation (golden sets, Hit@k)', 'JSON/JSONL pipelines'],
};

export const leadership = {
  title: 'Sector Management Team Member',
  company: 'CodeChem Inc.',
  dates: 'Nov 2022 – Sep 2024',
  bullets: [
    'One of a 5-person management group coordinating and supporting about 20 engineers.',
    'Mentored interns and junior engineers on breaking down problems, using tools effectively, and tracking their KPIs and goals.',
    'Created the technical assignments used in hiring; 5–10 new hires went through them.',
    'Contributed to team decisions on meeting client KPIs and maintaining service quality.',
  ],
};

export const skills: { area: string; items: string[] }[] = [
  { area: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'Java', 'R', 'Clojure', 'Bash'] },
  { area: 'AI / LLM', items: ['Claude Code', 'Cursor', 'Prompt engineering', 'Agent skills', 'MCP (FastMCP, Chrome MCP)', 'OpenAI Agents SDK', 'LangChain', 'CrewAI', 'Ollama', 'Hugging Face', 'sentence-transformers', 'RAG', 'ChromaDB', 'LLM evaluation (golden sets, Hit@k)'] },
  { area: 'Frontend', items: ['React', 'Redux', 'Vite', 'HTML/CSS', 'htmx', 'Chrome Extension APIs'] },
  { area: 'Backend', items: ['FastAPI', '.NET Core / .NET Framework', 'ASP.NET', 'Flask', 'Pydantic', 'SQLAlchemy', 'REST', 'OpenAPI', 'Microservices'] },
  { area: 'ML / Data science', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'JupyterLab', 'Weights & Biases'] },
  { area: 'Data / Scraping', items: ['Crawl4AI', 'BeautifulSoup', 'JSON/JSONL pipelines'] },
  { area: 'Databases / Queues', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Redis', 'Elasticsearch', 'RabbitMQ'] },
  { area: 'DevOps / Cloud', items: ['Docker', 'Docker Compose', 'AWS', 'Azure', 'Hetzner', 'NGINX', 'Linux', 'Infisical', 'Slurm / HPC', 'CUDA'] },
  { area: 'CI/CD', items: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Jenkins'] },
  { area: 'Observability', items: ['Grafana', 'Prometheus', 'Dozzle', 'Firebase Analytics', 'Google Analytics'] },
  { area: 'Testing / Quality', items: ['pytest', 'Jest', 'JUnit', 'Playwright', 'Cypress', 'Appium', 'Postman', 'ruff', 'mypy', 'pre-commit'] },
  { area: 'Tools / Process', items: ['Git (GitHub, GitLab)', 'Jira', 'Confluence', 'Notion', 'Figma'] },
];

export const education = [
  { degree: 'MSc in Data Science for Economics', school: 'University of Milan (Università degli Studi di Milano)', place: 'Milan, Italy', dates: 'Sep 2024 – expected Jan 2027' },
  { degree: 'BSc in Computer Science and Engineering', school: 'Ss. Cyril and Methodius University, Faculty of Computer Science and Engineering (FINKI)', place: 'Skopje, North Macedonia', dates: 'Sep 2018 – Nov 2023' },
];

export const languages = [
  { name: 'Macedonian', level: 'Native' },
  { name: 'English', level: 'C1, full professional' },
  { name: 'Italian', level: 'B2, professional working' },
  { name: 'French', level: 'B1' },
];

export const other = [
  { title: 'Transforming to a Circular Economy Business Model', where: 'AOTS, Osaka, Japan', when: 'Mar 2024', text: 'Studied circularity assessment tools and visited companies running circular-economy business models.' },
  { title: 'PR Coordinator, Job Fair 2019', where: 'BEST Skopje', when: 'Nov 2018 – May 2019', text: 'Led the PR campaign connecting companies with students across social media, on-campus promotion and event-day coverage.' },
  { title: 'Certified Yoga Teacher', where: 'RYT-200, Ashtanga Vinyasa, Yoga Alliance, Skopje', when: '2023', text: '' },
];
