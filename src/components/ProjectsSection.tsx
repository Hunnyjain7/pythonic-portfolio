import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaXTwitter, FaCode } from 'react-icons/fa6';
import Image from 'next/image';

interface Technology {
  name: string;
  color: string;
}

interface ProjectProps {
  title: string;
  description: string;
  contributions: string[];
  technologies: Technology[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  tag?: string;
  downloads?: string;
}

interface ProjectItems {
  professional: ProjectProps[];
  personal: ProjectProps[];
}

const technologies: Record<string, Technology> = {
  python: { name: 'Python', color: 'bg-blue-600' },
  django: { name: 'Django', color: 'bg-green-700' },
  react: { name: 'ReactJS', color: 'bg-blue-400' },
  git: { name: 'GIT', color: 'bg-red-500' },
  angular: { name: 'Angular', color: 'bg-red-600' },
  flutter: { name: 'Flutter', color: 'bg-blue-500' },
  dotnet: { name: 'DOT NET', color: 'bg-purple-600' },
  nextjs: { name: 'NextJS', color: 'bg-black' },
  openai: { name: 'OpenAI GPT', color: 'bg-green-500' },
  llm: { name: 'LLM', color: 'bg-purple-500' },
  mysql: { name: 'MySQL', color: 'bg-blue-800' },
  lambda: { name: 'Lambda', color: 'bg-orange-500' },
  firebase: { name: 'Firebase', color: 'bg-yellow-600' },
  jquery: { name: 'JQuery', color: 'bg-blue-700' },
  javascript: { name: 'JavaScript', color: 'bg-yellow-500' },
  chatbots: { name: 'AI Chatbots', color: 'bg-teal-600' },
};

const ProjectCard = ({ 
  title, 
  description, 
  contributions, 
  technologies: techs,
  imageUrl = '/project-placeholder.jpg',
  githubUrl,
  liveUrl,
  tag,
  downloads
}: ProjectProps) => (
  <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all group">
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10"></div>
      {/* Placeholder for now - replace with actual image later */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#306998] to-[#FFD43B] flex items-center justify-center text-white">
        <span className="font-fira-code text-sm">project-image.jpg</span>
      </div>
      {/* Uncomment when you have actual images
      <Image 
        src={imageUrl} 
        alt={title} 
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      */}
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="font-fira-code text-gray-400">
          # Project
          {tag && (
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              tag.includes('Stars') ? 'bg-green-400/10 text-green-400' : 'bg-gray-800'
            }`}>
              {tag}
            </span>
          )}
        </div>
        {downloads && (
          <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
            {downloads}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">
        <span className="font-fira-code text-green-400">project.</span>{title.replace(/\s+/g, '_').toLowerCase()}
      </h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="mb-4">
        <div className="font-fira-code text-blue-400 mb-2">def contributions():</div>
        <ul className="space-y-2">
          {contributions.map((contribution, idx) => (
            <li key={idx} className="flex">
              <span className="text-green-400 mr-2 font-fira-code">{'>'}</span>
              <span className="text-gray-300">{contribution}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech, idx) => (
          <span 
            key={idx} 
            className={`px-2 py-1 rounded-full text-xs font-medium text-white ${tech.color}`}
          >
            {tech.name}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4 mt-4">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center"
          >
            <FaGithub className="mr-1" /> Code
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center"
          >
            <FaExternalLinkAlt className="mr-1" /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 hover:border-blue-500"
  >
    {icon}
    <span className="text-sm">{label}</span>
  </a>
);

class ProjectManager {
  private projects: ProjectItems;

  constructor() {
    this.projects = {
      professional: this.getProfessionalProjects(),
      personal: this.getPersonalProjects()
    };
  }

  private getProfessionalProjects(): ProjectProps[] {
    return [
      {
        title: "Fortuna Astrology & Palmistry",
        description: "A comprehensive astrology and palmistry app offering personalized horoscopes, palm readings, birth charts, and daily guidance. Features include Daily Reading, Bespoke Reading, Birth Chart Analysis, Palm Reading, and more.",
        contributions: [
          "Requirement Understanding, Designing, Planning, and Development",
          "Design the Backend Architecture and Develop the REST APIs in Django REST Framework",
          "Building Microservices Architecture leveraging Rabbitmq and AWS services",
          "Demonstrating Prompt Engineering techniques"
        ],
        technologies: [technologies.python, technologies.flutter, technologies.react],
        liveUrl: "https://play.google.com/store/apps/details?id=com.fortuna.fortunaAstrology",
        tag: "Mobile App",
        downloads: "20K+ Downloads"
      },
      {
        title: "Blickers",
        description: "The biggest online store for luxury and designer glasses globally, offering more than 100 international brands in the fashion industry. Features include eyewear customization, virtual try-on, and comprehensive product catalog.",
        contributions: [
          "Migrated 40% of monolithic architecture's back-end code to micro-services architecture, leveraging GCP",
          "Maintained existing web crawlers and created new ones",
          "Built REST APIs using Django Rest Framework"
        ],
        technologies: [technologies.git, technologies.angular, technologies.django, technologies.python],
        liveUrl: "https://www.blickers.com/en/",
        tag: "E-commerce",
        downloads: "10K+ Daily Active Users"
      },
      {
        title: "Chart Generation Service",
        description: "A serverless microservices architecture project for generating dynamic 2D & 3D charts, processing large datasets, and providing comprehensive API documentation.",
        contributions: [
          "Orchestrated a versatile service, generating 2D & 3D charts via API & CLI, leveraging Bottle and Pyecharts",
          "Demonstrated analytical expertise through python & shell scripts, processing & storing vast datasets efficiently",
          "Led junior developers in understanding contracts, implementing services, overseeing deployment, conducting code reviews"
        ],
        technologies: [technologies.python, technologies.lambda],
        tag: "Serverless"
      },
      {
        title: "Fenced - Hotel Management System",
        description: "Comprehensive hotel management and price comparison platform with automated competitor analysis and corporate rate management.",
        contributions: [
          "Developed automation scripts for hotel data extraction and competitor price monitoring",
          "Implemented ETL pipelines for processing and analyzing hotel pricing data",
          "Built responsive dashboard using React.js for visualizing competitor analysis"
        ],
        technologies: [technologies.react, technologies.python, technologies.mysql],
        tag: "Hospitality Domain"
      },
      {
        title: "Vavis - Smart Home",
        description: "Advanced innovative capacitive touch lighting control system for home automation, enabling management of home lighting, IR-enabled devices, and room environment.",
        contributions: [
          "Developed REST and WebSocket APIs using Django REST Framework",
          "Designed and Developed admin interfaces for web and desktop applications",
          "Implemented an integrated smart home solution enabling voice and remote control functionalities"
        ],
        technologies: [technologies.mysql, technologies.lambda, technologies.firebase, technologies.jquery, technologies.javascript, technologies.django],
        liveUrl: "https://play.google.com/store/apps/details?id=com.smarthome.vavis",
        tag: "IoT"
      }
    ];
  }

  private getPersonalProjects(): ProjectProps[] {
    return [
      {
        title: "Fastapi Production Boilerplate",
        description: "A production-ready FastAPI boilerplate with comprehensive authentication and database integration.",
        contributions: [
          "Designed production level boilerplate for FastAPI and implemented secure Login and Register REST APIs with JWT Token Authentication for Admin and Client Apps",
          "Authored an influential Medium article detailing the integration of Alembic Migrations with MySQL in FastAPI"
        ],
        technologies: [technologies.python, technologies.mysql],
        githubUrl: "https://github.com/Hunnyjain7/fastapi-production-boilerplate",
        tag: "50+ Stars, 9 Forks"
      },
      {
        title: "Rate Shopping",
        description: "A platform that empowers users to identify best deals across platforms, eliminating hassle of checking multiple sites.",
        contributions: [
          "Developed REST API maintaining Django REST standards using ModelViewset, PermissionMixin, Group, ModelSerializer, Routers, Nested Router, Custom Middlewares, Custom Pagination, and Custom Renderer",
          "Implemented JWT authentication for seamless, secure user and admin logins, enhancing overall user experience",
          "Built efficient web crawlers to extract rates and data, seamlessly storing information into PostgreSQL database"
        ],
        technologies: [technologies.python, technologies.django, technologies.mysql],
        githubUrl: "https://github.com/Hunnyjain7/rate-shopping",
        tag: "Web App"
      },
      {
        title: "RAG Search Application",
        description: "A powerful RAG (Retrieval-Augmented Generation) search application that combines document retrieval with AI-powered responses.",
        contributions: [
          "Implemented advanced document processing and embedding generation using state-of-the-art language models",
          "Built a scalable search system with efficient vector storage and retrieval mechanisms",
          "Developed a user-friendly interface for document upload and intelligent query processing"
        ],
        technologies: [technologies.python, technologies.openai, technologies.llm],
        githubUrl: "https://github.com/Hunnyjain7/rag-search-app",
        tag: "AI/ML"
      },
      {
        title: "Health Predictor Plus",
        description: "An AI-powered health prediction system that analyzes user data to provide personalized health insights and predictions.",
        contributions: [
          "Developed machine learning models for health prediction using various algorithms",
          "Created a comprehensive data preprocessing pipeline for health-related features",
          "Implemented a user-friendly interface for data input and prediction visualization"
        ],
        technologies: [technologies.python, technologies.openai, technologies.llm],
        githubUrl: "https://github.com/Hunnyjain7/health-predictor-plus",
        tag: "AI/ML"
      },
      {
        title: "Algorithm Learning",
        description: "A comprehensive collection of algorithm implementations and data structures for learning and reference.",
        contributions: [
          "Implemented various data structures and algorithms in Python",
          "Created detailed documentation and explanations for each implementation",
          "Organized solutions by difficulty level and problem categories"
        ],
        technologies: [technologies.python],
        githubUrl: "https://github.com/Hunnyjain7/algorithm",
        tag: "DSA"
      }
    ];
  }

  public getProjects(): ProjectItems {
    return this.projects;
  }
}

const ProjectsSection = () => {
  const projectManager = new ProjectManager();
  const projects = projectManager.getProjects();

  return (
    <section id="projects" className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-gray-400 font-fira-code text-sm mb-2 font-bold">
            # Featured work
          </div>
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-blue-400 font-fira-code">for</span>
            <span className="text-white font-fira-code"> project </span>
            <span className="text-green-400 font-fira-code">in</span>
            <span className="text-white font-fira-code"> projects:</span>
          </h2>
        </div>

        <div className="space-y-16">
          {/* Professional Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-fira-code">
              <span className="text-green-400"># </span>
              <span className="text-white">professional projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.professional.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
              {/* More Projects Card */}
              <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all group flex flex-col justify-center items-center p-6">
                <div className="text-6xl text-gray-400 mb-4">
                  <FaGithub />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  <span className="font-fira-code text-green-400">more.</span>projects
                </h3>
                <p className="text-gray-300 mb-6 text-center">Explore more of my projects and contributions on GitHub</p>
                <a 
                  href="https://github.com/Hunnyjain7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <FaGithub /> View GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-fira-code">
              <span className="text-green-400"># </span>
              <span className="text-white">personal projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.personal.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
              {/* More Projects Card */}
              <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all group flex flex-col justify-center items-center p-6">
                <div className="text-6xl text-gray-400 mb-4">
                  <FaGithub />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  <span className="font-fira-code text-green-400">more.</span>projects
                </h3>
                <p className="text-gray-300 mb-6 text-center">Explore more of my projects and contributions on GitHub</p>
                <a 
                  href="https://github.com/Hunnyjain7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <FaGithub /> View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 